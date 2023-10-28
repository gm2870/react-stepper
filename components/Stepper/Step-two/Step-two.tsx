import PlanCard from '@/components/ui/Plan-card/Plan-card';
import PlanToggle from '@/components/ui/Plan-toggle/Plan-toggle';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

type PlanType = 'MONTHLY' | 'YEARLY';
const plans = [
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
const StepTwo = () => {
  const [planType, setPlanType] = useState<PlanType>('MONTHLY');

  const [plan, setPlan] = useState<string>('_1');

  const toggleHandler = () => {
    setPlanType((prev) => {
      if (prev === 'MONTHLY') return 'YEARLY';
      return 'MONTHLY';
    });
  };

  const changePlanHandler = (id: string) => {
    setPlan(id);
  };

  return (
    <div className="p-6 md:pt-20 md:px-12 h-full">
      <h1 className="text-blue-900 text-xl font-bold">Select your plan</h1>
      <p className="mt-3 mb-6 text-stone-500">
        You have the option of monthly or yearly plan.
      </p>
      <form className="flex my-2 w-full">
        {plans.map((p) => (
          <div key={p.id} className="mr-2 last-of-type:mr-0 w-full">
            <PlanCard
              changePlan={(id: string) => changePlanHandler(id)}
              {...p}
              selected={p.id === plan}
              type={planType}
            />
          </div>
        ))}
      </form>
      <PlanToggle toggleHandler={toggleHandler} type={planType} />
    </div>
  );
};

export default StepTwo;
