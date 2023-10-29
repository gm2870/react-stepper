import useIsMobile from '@/hooks/useIsMobile';
import Buttons from '../Buttons/Buttons';
import { useState } from 'react';
import ThankYou from '../Thank-you/Thank-you';

const StepFour = ({
  onConfirm,
  goBack,
}: {
  onConfirm: () => void;
  goBack: () => void;
}) => {
  const isMobile = useIsMobile();
  const [showThankYou, setShowThankYou] = useState(false);

  const confirmHandler = () => {
    setShowThankYou(true);
    onConfirm();
  };
  return (
    <>
      {!showThankYou ? (
        <>
          <div
            className={`${
              isMobile ? 'card' : ''
            } flex flex-col justify-between p-6 md:py-0 md:pt-10 mx-4 md:mx-0 md:px-12`}
          >
            <div>
              <h1 className="text-blue-900 text-2xl font-bold">Finishing up</h1>
              <p className="mt-3 mb-6 text-stone-500">
                Double-check everything looks OK before confirming.
              </p>
              <div className="rounded-md p-4 rounded bg-[#F8F9FE]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-blue-900">
                      <span>Arcade</span>
                      <span>Monthly</span>
                    </div>
                    <a href="">Change</a>
                  </div>
                  <div className="font-bold text-blue-900">$9/mo</div>
                </div>
                <div className="devider w-full h-[1px] bg-stone-200 my-4"></div>
                <div>
                  <div className="flex justify-between mb-4">
                    <div className="text-stone-400">Online service</div>
                    <div className="font-medium text-blue-900">+$120/yr</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-stone-400">Larger Storage</div>
                    <div className="font-medium text-blue-900">+$120/yr</div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-between">
                <div className="text-stone-400">Total (per year)</div>
                <div className="font-bold text-indigo-600">+$120/yr</div>
              </div>
            </div>
          </div>
          <Buttons isLast={true} previous={goBack} next={confirmHandler} />
        </>
      ) : (
        <ThankYou />
      )}
    </>
  );
};

export default StepFour;
