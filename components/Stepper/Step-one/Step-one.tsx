import Input from '@/components/ui/Input/Input';
import { UseFormRegister } from 'react-hook-form';
import Buttons from '../Buttons/Buttons';
import useIsMobile from '@/hooks/useIsMobile';

const StepOne = ({
  register,
  state,
}: {
  register: UseFormRegister<{
    email: string;
    name: string;
    phone: string;
  }>;
  state?: any;
}) => {
  const isMobile = useIsMobile();
  return (
    <>
      <div
        className={`${
          isMobile ? 'card' : ''
        } flex flex-col justify-between p-6 md:py-0 md:pt-20 mx-4 md:px-12`}
      >
        <h1 className="text-blue-900 text-xl font-bold">Personal Info</h1>
        <p className="mt-3 mb-6 text-stone-500">
          Please provide your name, email address and phone number.
        </p>
        <form>
          <div className="my-4">
            <Input
              control={{ ...register('name') }}
              label="name"
              state={state('name')}
            />
          </div>
          <div className="my-4">
            <Input
              control={{ ...register('email') }}
              state={state('email')}
              label="Email Address"
            />
          </div>
          <div className="my-4">
            <Input
              control={{ ...register('phone') }}
              state={state('phone')}
              label="Phone Number"
            />
          </div>
        </form>
      </div>
      <Buttons isFirst={true} isLast={false} />
    </>
  );
};

export default StepOne;
