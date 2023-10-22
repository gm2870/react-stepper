'use client';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Card from '../ui/Card/Card';
import StepTwo from './Step-two/Step-two';
import StepThree from './Step-three/Step-three';
import StepFour from './Step-four/Step-four';
import ThankYou from './Thank-you/Thank-you';

const Stepper = ({ isMobile }: { isMobile: boolean }) => {
  const [step, setstep] = useState(1);
  return (
    <div className="md:flex">
      <Sidebar />
      {!isMobile ? (
        <div className="hidden md:block w-full">
          <ThankYou />
        </div>
      ) : (
        <div className="relative z-20 -mt-24 mx-4 md:hidden">
          <Card>
            <StepTwo />
          </Card>
        </div>
      )}
    </div>
  );
};

export default Stepper;
