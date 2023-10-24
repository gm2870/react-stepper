'use client';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Card from '../ui/Card/Card';
import StepTwo from './Step-two/Step-two';
import StepThree from './Step-three/Step-three';
import StepFour from './Step-four/Step-four';
import Buttons from './Buttons/Buttons';
import StepOne from './Step-one/Step-one';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const Stepper = ({ isMobile }: { isMobile: boolean }) => {
  const [step, setStep] = useState(1);
  const changeStepHandler = async (step: number) => {
    const isValid = await trigger(['name', 'email', 'phone']);
    if (!isValid) return;
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

  return (
    <div className="md:flex h-full">
      <Sidebar step={step} changeStep={changeStepHandler} />
      {!isMobile ? (
        <>
          <div className="flex flex-col justify-between w-full md:py-6">
            {activeStep}
            <Buttons
              next={() => changeStepHandler(step + 1)}
              previous={() => changeStepHandler(step - 1)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col h-full justify-between relative z-20 -mt-24 mx-4 md:hidden">
            <Card>{activeStep}</Card>
          </div>
          <Buttons
            next={() => changeStepHandler(step + 1)}
            previous={() => changeStepHandler(step - 1)}
          />
        </>
      )}
    </div>
  );
};

export default Stepper;
