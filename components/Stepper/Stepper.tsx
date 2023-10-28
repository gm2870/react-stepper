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

export const plans: Plan[] = [
  {
    id: '_1',
    price: 9,
    icon: 'arcade',
    title: 'Arcade',
    type: 'MONTHLY',
  },
  {
    id: '_2',
    price: 12,
    icon: 'advanced',
    title: 'Advanced',
    type: 'MONTHLY',
  },
  {
    id: '_3',
    price: 19,
    icon: 'pro',
    title: 'Pro',
    type: 'MONTHLY',
  },
];
export const addons: Addon[] = [
  {
    id: '_1',
    price: 9,
    title: 'Online Service',
    description: 'Access to muktiplayer games',
    type: 'MONTHLY',
  },
  {
    id: '_2',
    price: 12,
    title: 'Online Service',
    description: 'Access to multiplayer games',
    type: 'MONTHLY',
  },
  {
    id: '_3',
    price: 15,
    title: 'Online Service',
    description: 'Access to multiplayer games',
    type: 'MONTHLY',
  },
];
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
          isFirst={step === 1}
          isLast={step === 4}
          next={() => changeStepHandler(step + 1)}
          previous={() => changeStepHandler(step - 1)}
        />
      </div>
    </div>
  );
};

export default Stepper;
