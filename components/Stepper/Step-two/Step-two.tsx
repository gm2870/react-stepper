import { Plan } from '@/app/models/plan.model';
import PlanCard from '@/components/ui/Plan-card/Plan-card';
import PlanToggle from '@/components/ui/Plan-toggle/Plan-toggle';
import useIsMobile from '@/hooks/useIsMobile';
import Buttons from '../Buttons/Buttons';
import { plans } from '@/app/data';
import { useState } from 'react';

const StepTwo = ({
  currentPlan,
  onConfirm,
  goBack,
}: {
  currentPlan: Plan;
  onConfirm: (plan: Plan) => void;
  goBack: () => void;
}) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(currentPlan);
  const toggleHandler = () => {
    const type = selectedPlan.type === 'MONTHLY' ? 'YEARLY' : 'MONTHLY';

    setSelectedPlan({
      ...selectedPlan,
      type,
    });
  };

  const changePlanHandler = (plan: Plan) => {
    setSelectedPlan(plan);
  };
  const isMobile = useIsMobile();

  return (
    <>
      <div
        className={`${
          isMobile ? 'card' : ''
        } flex flex-col justify-between p-6 md:py-0 md:pt-10 mx-4 md:mx-0 md:px-12`}
      >
        <h1 className="text-blue-900 text-2xl font-bold">Select your plan</h1>
        <p className="mt-3 text-stone-500">
          You have the option of monthly or yearly plan.
        </p>
        <form className="flex my-6 w-full">
          {plans.map((p) => (
            <div key={p.id} className="mr-2 last-of-type:mr-0 w-full">
              <PlanCard
                changePlan={(plan: Plan) => changePlanHandler(plan)}
                plan={p}
                selected={p.id === selectedPlan.id}
                type={selectedPlan.type}
              />
            </div>
          ))}
        </form>
        <PlanToggle toggleHandler={toggleHandler} type={selectedPlan.type} />
      </div>
      <Buttons previous={goBack} next={() => onConfirm(selectedPlan)} />
    </>
  );
};

export default StepTwo;
