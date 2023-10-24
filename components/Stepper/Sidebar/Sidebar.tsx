import Step from '@/components/ui/Step/Step';
import Image from 'next/image';

const Sidebar = ({
  step,
  changeStep,
}: {
  step: number;
  changeStep: (step: number) => void;
}) => {
  return (
    <div className="grid rounded-xl md:p-6 grid-rows-[100px_100px] md:grid-rows-1">
      <div className="relative hidden md:block w-[350px] h-[700px] row-start-1 row-end-1 col-end-1">
        <Image
          fill
          src="/images/bg-sidebar-desktop.svg"
          alt="bg-sidebar-desktop"
        />
      </div>
      <div className="relative md:hidden w-[100%] h-[200px] row-start-1 row-end-1 col-end-1">
        <Image
          fill
          objectFit="cover"
          src="/images/bg-sidebar-mobile.svg"
          alt="bg-sidebar-desktop"
        />
      </div>
      <div className="z-10 md:h-full grid grid-rows-1 grid-cols-4 md:block row-start-1 row-end-1 col-end-1 md:py-5 w-1/2 md:w-full m-auto  md:py-12 md:px-3">
        <Step
          title="Your Info"
          index={1}
          active={step === 1}
          changeStep={() => changeStep(1)}
        />
        <Step
          title="Select Plan"
          index={2}
          active={step === 2}
          changeStep={() => changeStep(2)}
        />
        <Step
          title="Add-ons"
          index={3}
          active={step === 3}
          changeStep={() => changeStep(3)}
        />
        <Step
          title="Summary"
          index={4}
          active={step === 4}
          changeStep={() => changeStep(4)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
