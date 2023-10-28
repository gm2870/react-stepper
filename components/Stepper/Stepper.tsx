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
import { Plan } from '@/app/models/plan.model';
import { PersonalInfo } from '@/app/models/personal-info.model';
import { Addon } from '@/app/models/addon.model';
import { plans } from '@/app/data';

const Stepper = () => {
  const [data, setData] = useState<{
    personalInfo: PersonalInfo;
    plan: Plan;
    addon: Addon | undefined;
  }>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    plan: plans[1],
    addon: undefined,
  });
  const [step, setStep] = useState(1);

  const changePlanHandler = (plan: Plan) => {
    setData((prev) => ({
      ...prev,
      plan,
    }));
  };

  const changeStepHandler = async (step: number) => {
    const isValid = await trigger(['name', 'email', 'phone']);
    if (!isValid) return;

    if (step > 4 || step < 1) {
      return;
    }
    switch (step) {
      case 2:
        const personalInfo = watch();
        setData((prev) => ({
          ...prev,
          personalInfo,
        }));
        break;
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

  const changeAddonHandler = (addon: Addon) => {
    setData((prev) => ({
      ...prev,
      addon,
    }));
  };

  let activeStep = <StepOne register={register} state={getFieldState} />;
  switch (step) {
    case 1:
      activeStep = <StepOne register={register} state={getFieldState} />;
      break;
    case 2:
      activeStep = (
        <StepTwo currentPlan={data.plan} changePlan={changePlanHandler} />
      );
      break;
    case 3:
      activeStep = (
        <StepThree changeAddon={changeAddonHandler} currentAddon={data.addon} />
      );
      break;
    case 4:
      activeStep = <StepFour />;
      break;
    default:
      break;
  }
  const isMobile = useIsMobile();
  return (
    <div
      className={`${
        !isMobile ? 'card' : ''
      } flex flex-col grow md:grow-0 w-full md:flex-row md:p-6`}
    >
      <Sidebar step={step} changeStep={changeStepHandler} />

      <div className="flex flex-col w-full justify-between -mt-24 md:mt-0 grow md:py-6">
        <div
          className={`flex flex-col justify-between grow z-20  md:mx-4 md:mx-0`}
        >
          {activeStep}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
