import { ChangeEventHandler } from 'react';
import ToggleInput from '../Toggle-Input/Toggle-input';
type ToggleProps = {
  type: 'MONTHLY' | 'YEARLY';
  toggleHandler: ChangeEventHandler<HTMLInputElement>;
};
const PlanToggle = ({ type, toggleHandler }: ToggleProps) => {
  const checked = type === 'YEARLY' ? true : false;
  const selectedClassName = (planType: 'MONTHLY' | 'YEARLY') =>
    `${type === planType ? 'text-blue-900' : 'text-stone-500'}`;
  return (
    <div className="bg-blue-50 p-6 rounded-md text-center">
      <span className={selectedClassName(type)}>Monthly</span>
      <div className="inline-block mx-6">
        <ToggleInput toggleChanged={toggleHandler} checked={checked} />
      </div>
      <span className={selectedClassName(type)}>Yearly</span>
    </div>
  );
};

export default PlanToggle;
