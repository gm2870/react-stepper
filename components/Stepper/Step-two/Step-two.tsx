import PlanCard from '@/components/ui/Plan-card/Plan-card';
import PlanToggle from '@/components/ui/Plan-toggle/Plan-toggle';
import { useState } from 'react';

type PlanType = 'MONTHLY' | 'YEARLY';
const StepTwo = () => {
  const [planType, setPlanType] = useState<PlanType>('MONTHLY');
  const toggleHandler = () => {
    setPlanType((prev) => {
      if (prev === 'MONTHLY') return 'YEARLY';
      return 'MONTHLY';
    });
  };
  return (
    <div className="p-6 md:pt-20 md:px-12 h-full">
      <div>
        <h1 className="text-blue-900 text-xl font-bold">Select your plan</h1>
        <p className="mt-3 mb-6 text-stone-500">
          You have the option of monthly or yearly plan.
        </p>
        <form className="flex my-2 w-full">
          <div className="mr-2 w-full">
            <PlanCard
              price={9}
              title="Arcade"
              icon="arcade"
              type={planType}
              selected={false}
            />
          </div>
          <div className="mx-2 w-full">
            <PlanCard
              price={12}
              title="Advanced"
              icon="advanced"
              type={planType}
              selected={true}
            />
          </div>
          <div className="ml-2 w-full">
            <PlanCard
              price={15}
              title="Pro"
              icon="pro"
              type={planType}
              selected={false}
            />
          </div>
        </form>
        <PlanToggle toggleHandler={toggleHandler} type={planType} />
      </div>
    </div>
  );
};

export default StepTwo;
