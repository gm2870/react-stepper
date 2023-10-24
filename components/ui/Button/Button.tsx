import { PropsWithChildren } from 'react';
type ButtonProps = PropsWithChildren<{
  color?: 'gray' | 'primary' | 'none';
  textColor?: string;
  onClick?: () => void;
}>;
const Button = ({
  children,
  color = 'primary',
  textColor = 'primary',
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn btn-${color} text-${textColor}`}>
      {children}
    </button>
  );
};
export default Button;
