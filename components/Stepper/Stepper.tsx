'use client';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Card from '../ui/Card/Card';
import StepTwo from './Step-two/Step-two';
import StepThree from './Step-three/Step-three';
import StepFour from './Step-four/Step-four';
import ThankYou from './Thank-you/Thank-you';
import Buttons from './Buttons/Buttons';
import StepOne from './Step-one/Step-one';
import Button from '../ui/Button/Button';

const Stepper = ({ isMobile }: { isMobile: boolean }) => {
  const [step, setStep] = useState(1);
  const changeStepHandler = (step: number) => {
    if (step > 4 || step < 1) {
      return;
    }
    setStep(step);
  };
  let activeStep = <StepOne />;
  switch (step) {
    case 1:
      activeStep = <StepOne />;
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
