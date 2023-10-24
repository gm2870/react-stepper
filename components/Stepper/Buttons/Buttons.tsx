import Button from '@/components/ui/Button/Button';

type ButtonsProps = {
  next: () => void;
  previous?: () => void;
};

const Buttons = ({ next, previous }: ButtonsProps) => {
  return (
    <div className="absolute md:relative bottom-0 w-full bg-white p-3 flex justify-between">
      <Button onClick={previous} color="gray">
        Go Back
      </Button>
      <Button onClick={next}>Next Step</Button>
    </div>
  );
};

export default Buttons;
