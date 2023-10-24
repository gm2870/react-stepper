import Button from '@/components/ui/Button/Button';

const Buttons = () => {
  return (
    <div className="absolute md:relative bottom-0 w-full bg-white p-3 flex justify-between">
      <Button color="gray">Go Back</Button>
      <Button>Next Step</Button>
    </div>
  );
};

export default Buttons;
