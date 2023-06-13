/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.scss";

interface ButtonProps {
  label: string;
  onClick: (e?: any) => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return <button className="button" onClick={(e: any)=>onClick(e)}>{label}</button>;
};

export default Button;
