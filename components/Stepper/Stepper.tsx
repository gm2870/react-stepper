'use client';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import StepTwo from './Step-two/Step-two';
import StepThree from './Step-three/Step-three';
import StepFour from './Step-four/Step-four';
import Buttons from './Buttons/Buttons';
import StepOne from './Step-one/Step-one';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import useIsMobile from '@/hooks/useIsMobile';

const Stepper = () => {
  const [data, setData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    plan: {
      id: '',
      type: 'MONTHLY',
    },
  });
  const [step, setStep] = useState(1);

  const changeStepHandler = async (step: number) => {
    const isValid = await trigger(['name', 'email', 'phone']);
    if (!isValid) return;
    switch (step) {
      case 2:
        const personalInfo = watch();
        setData((prev) => ({
          ...prev,
          personalInfo,
        }));
        break;
      case 3:
        // update plan of data
        break;

      default:
        break;
    }
    if (step > 4 || step < 1) {
      return;
    }
    setStep(step);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email.')
      .required('Email is required'),
    name: Yup.string().required('Please enter your name.'),
    phone: Yup.string().required('Please enter your phone number.'),
  });

  const {
    register,
    handleSubmit,
    trigger,
    getFieldState,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
    mode: 'onTouched',
  });

  let activeStep = <StepOne register={register} state={getFieldState} />;
  switch (step) {
    case 1:
      activeStep = <StepOne register={register} state={getFieldState} />;
      break;
    case 2:
      activeStep = <StepTwo />;
      break;
    case 3:
      activeStep = <StepThree />;
      break;
    case 4:
      activeStep = <StepFour />;
      break;
    default:
      break;
  }
  const isMobile = useIsMobile();
  return (
    <div className={`${!isMobile ? 'card' : ''} w-full md:flex h-full`}>
      <Sidebar step={step} changeStep={changeStepHandler} />

      <div className="w-full flex flex-col justify-between md:py-6">
        <div
          className={`${
            isMobile ? 'card' : ''
          } relative z-20 -mt-24 md:mt-0 mx-4 md:mx-0`}
        >
          {activeStep}
        </div>
        <Buttons
          next={() => changeStepHandler(step + 1)}
          previous={() => changeStepHandler(step - 1)}
        />
      </div>
    </div>
  );
};

export default Stepper;
