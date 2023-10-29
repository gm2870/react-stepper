import Input from '@/components/ui/Input/Input';
import { UseFormRegister } from 'react-hook-form';
import Buttons from '../Buttons/Buttons';
import useIsMobile from '@/hooks/useIsMobile';
import { PersonalInfo } from '@/app/models/personal-info.model';

const StepOne = ({
  register,
  state,
  onConfirm,
}: {
  register: UseFormRegister<PersonalInfo>;
  state?: any;
  onConfirm: () => void;
}) => {
  const isMobile = useIsMobile();
  return (
    <>
      <div
        className={`${
          isMobile ? 'card' : ''
        } flex flex-col justify-between p-6 md:py-0 md:pt-10 mx-4 md:mx-0 md:px-12`}
      >
        <h1 className="text-blue-900 text-2xl font-bold">Personal Info</h1>
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
      <Buttons isFirst={true} next={onConfirm} />
    </>
  );
};

export default StepOne;
