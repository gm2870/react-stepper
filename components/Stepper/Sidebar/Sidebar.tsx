import Step from '@/components/ui/Step/Step';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="grid rounded-xl md:p-6">
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
      <div className="z-10 h-full grid grid-rows-1 grid-cols-4 md:block row-start-1 row-end-1 col-end-1 py-5 w-1/2 md:w-full m-auto  md:py-12 md:px-3">
        <Step title="Your Info" index={1} active={true} />
        <Step title="Select Plan" index={2} active={false} />
        <Step title="Add-ons" index={3} active={false} />
        <Step title="Summary" index={4} active={false} />
      </div>
    </div>
  );
};

export default Sidebar;
