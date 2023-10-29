import { ChangeEventHandler } from 'react';
import ToggleInput from '../Toggle-Input/Toggle-input';
type ToggleProps = {
  type: 'MONTHLY' | 'YEARLY';
  toggleHandler: ChangeEventHandler<HTMLInputElement>;
};
const PlanToggle = ({ type, toggleHandler }: ToggleProps) => {
  const checked = type === 'YEARLY' ? true : false;

  return (
    <div className="bg-blue-50 p-3 rounded-md text-center">
      <span
        className={`${
          type === 'MONTHLY' ? 'font-bold text-blue-900' : 'text-stone-500'
        }`}
      >
        Monthly
      </span>
      <div className="inline-block mx-6">
        <ToggleInput toggleChanged={toggleHandler} checked={checked} />
      </div>
      <span
        className={`${
          type === 'YEARLY' ? 'font-bold text-blue-900' : 'text-stone-500'
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default PlanToggle;
