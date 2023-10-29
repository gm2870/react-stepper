import { Addon } from '@/app/models/addon.model';
import AddonCard from '@/components/ui/Addon-card/Addon-card';
import useIsMobile from '@/hooks/useIsMobile';
import Buttons from '../Buttons/Buttons';
import { addons } from '@/app/data';
import { useEffect, useState } from 'react';
const StepThree = ({
  currentAddon,
  onConfirm,
  goBack,
}: {
  currentAddon?: Addon;
  onConfirm: (ad: Addon | undefined) => void;
  goBack: () => void;
}) => {
  const [addon, setAddon] = useState<Addon>();
  const isMobile = useIsMobile();

  useEffect(() => {
    setAddon(currentAddon);
  }, [currentAddon]);
  return (
    <>
      <div
        className={`${
          isMobile ? 'card' : ''
        } flex flex-col justify-between p-6 md:py-0 md:pt-10 mx-4 md:mx-0 md:px-12`}
      >
        <div>
          <h1 className="text-blue-900 text-2xl font-bold">Pick add-ons</h1>
          <p className="mt-3 mb-6 text-stone-500">
            Add-ons help enhance your gaming experience.
          </p>
          {addons.map((ad) => (
            <div key={ad.id} className="mb-4" onClick={() => setAddon(ad)}>
              <AddonCard
                price={ad.price}
                type={ad.type}
                title={ad.title}
                selected={addon?.id === ad.id}
                subTitle={ad.description}
              />
            </div>
          ))}
        </div>
      </div>
      <Buttons previous={goBack} next={() => onConfirm(addon)} />
    </>
  );
};

export default StepThree;
