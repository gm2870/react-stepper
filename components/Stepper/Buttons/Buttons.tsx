import Button from '@/components/ui/Button/Button';

type ButtonsProps = {
  next: () => void;
  previous?: () => void;
  isLast?: boolean;
  isFirst?: boolean;
};

const Buttons = ({ next, previous, isLast, isFirst }: ButtonsProps) => {
  return (
    <div className="absolute md:relative bottom-0 w-full bg-white py-3 px-6 md:px-12 flex justify-between">
      <div>
        {!isFirst && (
          <Button onClick={previous} color="gray">
            Go Back
          </Button>
        )}
      </div>
      <Button onClick={next}>{isLast ? 'Confirm' : 'Next Step'}</Button>
    </div>
  );
};

export default Buttons;
