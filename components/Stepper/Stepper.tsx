'use client';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import StepTwo from './Step-two/Step-two';
import StepThree from './Step-three/Step-three';
import StepFour from './Step-four/Step-four';
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
    addon: Addon;
  }>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    plan: plans[1],
    addon: {} as Addon,
  });
  const [step, setStep] = useState(1);

  const ConfirmPlan = (plan: Plan) => {
    setData((prev) => ({
      ...prev,
      plan,
    }));
    setStep(3);
  };

  const changeStepHandler = async (step: number) => {
    const isValid = await trigger(['name', 'email', 'phone']);
    if (!isValid) return;
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
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
    mode: 'onTouched',
  });

  const changeAddonHandler = (addon: Addon | undefined) => {
    if (addon) {
      setData((prev) => ({
        ...prev,
        addon,
      }));
    }
    setStep(4);
  };

  const confirmPersonalInfo = (personalInfo: PersonalInfo) => {
    setData((prev) => ({
      ...prev,
      personalInfo,
    }));
    setStep(2);
  };

  let activeStep = (
    <StepOne
      register={register}
      state={getFieldState}
      onConfirm={handleSubmit((e) => confirmPersonalInfo(e))}
    />
  );

  const submitData = () => console.log(data);
  switch (step) {
    case 1:
      activeStep = (
        <StepOne
          register={register}
          state={getFieldState}
          onConfirm={handleSubmit((e) => confirmPersonalInfo(e))}
        />
      );

      break;
    case 2:
      activeStep = (
        <StepTwo
          goBack={() => setStep(1)}
          currentPlan={data.plan}
          onConfirm={ConfirmPlan}
        />
      );
      break;
    case 3:
      activeStep = (
        <StepThree
          goBack={() => setStep(2)}
          onConfirm={changeAddonHandler}
          currentAddon={data.addon}
        />
      );
      break;
    case 4:
      activeStep = (
        <StepFour goBack={() => setStep(3)} onConfirm={submitData} />
      );
      break;
    default:
      break;
  }
  const isMobile = useIsMobile();

  useEffect(() => {
    // in edit mode get form data from api
    // and set it using reset method provided by hook form
    // reset({
    //   name: 'ali',
    //   email: 'ali@gmail.com',
    //   phone: '1234',
    // });
  }, []);

  return (
    <div
      className={`${
        !isMobile ? 'card' : ''
      } flex flex-col grow md:grow-0 w-full md:flex-row md:p-6`}
    >
      <Sidebar step={step} changeStep={changeStepHandler} />

      <div className="flex flex-col w-full justify-between -mt-24 md:mt-0 grow md:px-12">
        <div className={`flex flex-col justify-between grow z-20 md:mx-0`}>
          {activeStep}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
