type InputProps = {
  label: string;
};
const Input = ({ label }: InputProps) => {
  return (
    <>
      <label className="mb-1 text-blue-900 font-medium block">{label}</label>
      <input
        className="w-full rounded-[3px] outline-1 outline-violet-900 border p-2 border-stone-300"
        type="text"
      />
    </>
  );
};

export default Input;
