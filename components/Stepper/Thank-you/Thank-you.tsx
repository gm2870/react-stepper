import useIsMobile from '@/hooks/useIsMobile';
import Image from 'next/image';

const ThankYou = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`${
        isMobile ? 'card' : ''
      } py-24 px-8 mx-4 md:px-24 flex flex-col items-center justify-center h-3/4`}
    >
      <div className="mb-3">
        <Image width={70} height={70} src="/images/icon-thank-you.svg" alt="" />
      </div>
      <div className="my-2 font-bold text-2xl text-blue-900">Thank you!</div>
      <div className="text-stone-400">
        Thanks for submitting your subscription! we hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
};

export default ThankYou;
