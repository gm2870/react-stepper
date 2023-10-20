import { PropsWithChildren } from 'react';

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full bg-[white] shadow-[0_0_1rem_rgba(0,0,0,0.122)] rounded-xl md:p-3">
      {children}
    </div>
  );
};

export default Card;
