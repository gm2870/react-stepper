import AddonCard from '@/components/ui/Addon-card/Addon-card';

const StepThree = () => {
  return (
    <div className="p-6 md:py-20 md:px-12">
      <h1 className="text-blue-900 text-xl font-bold">Pick add-ons</h1>
      <p className="mt-3 mb-6 text-stone-500">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="mb-4">
        <AddonCard
          price={9}
          type="YEARLY"
          title="Online Service"
          selected={false}
          subTitle="Access to multiplayer games"
        />
      </div>
      <div className="mb-4">
        <AddonCard
          price={9}
          type="YEARLY"
          title="Online Service"
          selected={false}
          subTitle="Access to multiplayer games"
        />
      </div>
      <AddonCard
        price={9}
        type="YEARLY"
        title="Online Service"
        selected={false}
        subTitle="Access to multiplayer games"
      />
    </div>
  );
};

export default StepThree;
