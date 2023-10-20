'use client';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Card from '../ui/Card/Card';
import StepOne from './Step-one/Step-one';

const Stepper = () => {
  const [step, setstep] = useState(1);

  return (
    <div className="md:flex">
      <Sidebar />
      <div className="hidden md:block">
        <StepOne />
      </div>
      <div className="relative z-20 -mt-24 mx-4 md:hidden">
        <Card>
          <StepOne />
        </Card>
      </div>
    </div>
  );
};

export default Stepper;
