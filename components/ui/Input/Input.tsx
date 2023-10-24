type InputProps = {
  label: string;
  control?: any;
  state?: any;
};
const Input = ({ label, control, state }: InputProps) => {
  return (
    <>
      <div className="flex justify-between">
        <label className="mb-1 text-blue-900 font-medium">{label}</label>
        {state.error && state.invalid && (
          <span className="mb-1 text-red-600 text-xs flex items-center font-bold">
            {state.error.message}
          </span>
        )}
      </div>
      <input
        required
        {...control}
        className={`${
          state?.invalid ? 'border-red-600' : 'outline-blue-900'
        } w-full rounded-[3px] outline-1 border p-2 border-stone-300`}
        type="text"
      />
    </>
  );
};

export default Input;
