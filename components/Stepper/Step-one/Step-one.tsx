import Input from '@/components/ui/Input/Input';

const StepOne = () => {
  return (
    <div className="p-6 md:pt-20 md:px-12">
      <div>
        <h1 className="text-blue-900 text-xl font-bold">Personal Info</h1>
        <p className="mt-3 mb-6 text-stone-500">
          Please provide your name, email address and phone number.
        </p>
        <form>
          <div className="my-4">
            <Input label="name" />
          </div>
          <div className="my-4">
            <Input label="Email Address" />
          </div>
          <div className="my-4">
            <Input label="Phone Number" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
