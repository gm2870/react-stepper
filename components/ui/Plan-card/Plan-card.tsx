import Image from 'next/image';
import { MouseEventHandler } from 'react';

type PlanCardProps = {
  id: string;
  price: number;
  icon: string;
  title: string;
  type: string;
  selected: boolean;
  changePlan: (id: string) => void;
};
const PlanCard = ({
  id,
  price,
  icon,
  title,
  type,
  selected,
  changePlan,
}: PlanCardProps) => {
  const planType = type === 'MONTHLY' ? 'mo' : 'yr';
  return (
    <div
      onClick={() => changePlan(id)}
      className={`${
        selected ? 'border-blue-900 bg-blue-50' : 'border-stone-300'
      } flex w-full cursor-pointer flex-col justify-between violet-900 border p-4 min-h-[150px] rounded-md`}
    >
      <div>
        <Image src={`/images/icon-${icon}.svg`} width={40} height={40} alt="" />
      </div>
      <div>
        <div className="font-bold text-blue-900">{title}</div>
        <div className="text-stone-500">
          ${price}/${planType}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
