import { ChangeEventHandler } from 'react';

type ToggleProps = {
  checked: boolean;
  toggleChanged: ChangeEventHandler<HTMLInputElement>;
};
const ToggleInput = ({ checked, toggleChanged }: ToggleProps) => {
  return (
    <label className="relative inline-block w-[50px] h-[25px]">
      <input
        type="checkbox"
        className="peer/toggle opacity-0 w-0 h-0"
        checked={checked}
        onChange={toggleChanged}
      />
      <span className="peer-checked/toggle:bg-blue-900 before:peer-checked/toggle:translate-x-[22px] transition-all before:transition-all absolute cursor-pointer left-0 bg-blue-900 top-0 left-0 bottom-0 right-0 before:absolute before:w-[17px] before:h-[17px] before:left-[5px] before:bottom-[4px] before:bg-white rounded-[34px] before:rounded-full"></span>
    </label>
  );
};

export default ToggleInput;
