import { Plan } from '@/app/models/plan.model';
import PlanCard from '@/components/ui/Plan-card/Plan-card';
import PlanToggle from '@/components/ui/Plan-toggle/Plan-toggle';
import useIsMobile from '@/hooks/useIsMobile';
import Buttons from '../Buttons/Buttons';
import { plans } from '@/app/data';

const StepTwo = ({
  currentPlan,
  changePlan,
}: {
  currentPlan: Plan;
  changePlan: (plan: Plan) => void;
}) => {
  const toggleHandler = () => {
    const type = currentPlan.type === 'MONTHLY' ? 'YEARLY' : 'MONTHLY';

    changePlanHandler({
      ...currentPlan,
      type,
    });
  };

  const changePlanHandler = (plan: Plan) => changePlan(plan);
  const isMobile = useIsMobile();

  return (
    <>
      <div
        className={`${
          isMobile ? 'card' : ''
        } flex flex-col justify-between p-6 md:py-0 md:pt-20 mx-4 md:px-12`}
      >
        <h1 className="text-blue-900 text-xl font-bold">Select your plan</h1>
        <p className="mt-3 mb-6 text-stone-500">
          You have the option of monthly or yearly plan.
        </p>
        <form className="flex my-2 w-full">
          {plans.map((p) => (
            <div key={p.id} className="mr-2 last-of-type:mr-0 w-full">
              <PlanCard
                changePlan={(plan: Plan) => changePlanHandler(plan)}
                plan={p}
                selected={p.id === currentPlan.id}
              />
            </div>
          ))}
        </form>
        <PlanToggle toggleHandler={toggleHandler} type={currentPlan.type} />
      </div>
      <Buttons isFirst={false} isLast={false} />
    </>
  );
};

export default StepTwo;
