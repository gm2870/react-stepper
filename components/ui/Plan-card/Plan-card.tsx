import { Plan } from '@/app/models/plan.model';
import Image from 'next/image';

type PlanCardProps = {
  plan: Plan;
  selected: boolean;
  type: 'MONTHLY' | 'YEARLY';
  changePlan: (plan: Plan) => void;
};

const PlanCard = ({ plan, selected, changePlan, type }: PlanCardProps) => {
  const changePlanHandler = () => changePlan(plan);

  const planType = type === 'MONTHLY' ? 'mo' : 'yr';
  return (
    <div
      onClick={changePlanHandler}
      className={`${
        selected ? 'border-blue-900 bg-blue-50' : 'border-stone-300'
      } flex w-full cursor-pointer flex-row md:flex-col md:justify-between violet-900 border p-4 md:min-h-[200px] rounded-md`}
    >
      <div className="mr-4 md:mr-0">
        <Image
          src={`/images/icon-${plan.icon}.svg`}
          width={40}
          height={40}
          alt=""
        />
      </div>
      <div>
        <div className="font-bold text-blue-900">{plan.title}</div>
        <div className="text-stone-500">
          ${plan.price}/${planType}
        </div>
        {type === 'MONTHLY' && (
          <div className="font-medium text-blue-900">2 months free</div>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
