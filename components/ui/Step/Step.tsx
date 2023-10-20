type StepProps = {
  active: boolean;
  title: string;
  index: number;
};
const Step = ({ active, title, index }: StepProps) => {
  return (
    <div className="cursor-pointer block md:grid grid-rows-2 grid-cols-4 py-3">
      <div className="flex justify-center items-center row-start-1 row-span-2 col-start-1 col-end-1">
        <div
          className={`${
            active
              ? 'bg-[--active-step] border-[--active-step]'
              : 'border-[white]'
          } border flex items-center justify-center rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px]`}
        >
          <div
            className={`${
              active ? 'text-indigo-900' : 'text-white'
            } font-medium`}
          >
            {index}
          </div>
        </div>
      </div>
      <div className="hidden md:block uppercase row-start-1 row-span-2 col-span-3 col-start-2">
        <div className="text-[#B4B3FF]">step {index}</div>
        <div className="text-[white] font-medium">{title}</div>
      </div>
    </div>
  );
};

export default Step;
