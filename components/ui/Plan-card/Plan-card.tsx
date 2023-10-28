import { Plan } from '@/app/models/plan.model';
import Image from 'next/image';

type PlanCardProps = {
  plan: Plan;
  selected: boolean;
  changePlan: (plan: Plan) => void;
};

const PlanCard = ({ plan, selected, changePlan }: PlanCardProps) => {
  const changePlanHandler = () => changePlan(plan);

  const planType = plan.type === 'MONTHLY' ? 'mo' : 'yr';
  return (
    <div
      onClick={changePlanHandler}
      className={`${
        selected ? 'border-blue-900 bg-blue-50' : 'border-stone-300'
      } flex w-full cursor-pointer flex-col justify-between violet-900 border p-4 min-h-[150px] rounded-md`}
    >
      <div>
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
      </div>
    </div>
  );
};

export default PlanCard;
