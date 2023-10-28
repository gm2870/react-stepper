import { Addon } from '@/app/models/addon.model';
import AddonCard from '@/components/ui/Addon-card/Addon-card';
import { addons } from '../Stepper';
const StepThree = ({
  currentAddon,
  changeAddon,
}: {
  currentAddon?: Addon;
  changeAddon: (ad: Addon) => void;
}) => {
  const selectAddon = (ad: Addon) => {
    changeAddon(ad);
  };
  return (
    <div className="p-6 md:pt-20 md:px-12 h-full">
      <div>
        <h1 className="text-blue-900 text-xl font-bold">Pick add-ons</h1>
        <p className="mt-3 mb-6 text-stone-500">
          Add-ons help enhance your gaming experience.
        </p>
        {addons.map((ad) => (
          <div key={ad.id} className="mb-4" onClick={() => selectAddon(ad)}>
            <AddonCard
              price={ad.price}
              type={ad.type}
              title={ad.title}
              selected={currentAddon?.id === ad.id}
              subTitle={ad.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepThree;
