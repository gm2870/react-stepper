type AddonCardProps = {
  price: number;
  title: string;
  type: 'MONTHLY' | 'YEARLY';
  selected: boolean;
  subTitle: string;
};
const AddonCard = ({
  subTitle,
  price,
  title,
  type,
  selected,
}: AddonCardProps) => {
  const planType = type === 'MONTHLY' ? 'mo' : 'yr';
  return (
    <div
      className={`${
        selected ? 'border-blue-900 bg-blue-50' : 'border-stone-300'
      } flex w-full cursor-pointer items-center justify-between violet-900 border p-4 rounded-md`}
    >
      <div className="flex gap-4">
        <input className="w-[20px] bg-indigo-500" type="checkbox" />
        <div>
          <div className="font-bold text-blue-900">{title}</div>
          <div className="text-stone-400">{subTitle}</div>
        </div>
      </div>
      <div className="text-indigo-500">
        +${price}/${planType}
      </div>
    </div>
  );
};

export default AddonCard;
