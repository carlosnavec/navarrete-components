import React from "react";
import "./Button.scss";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  label: string;
  disabled?: boolean;
}

const Button = ({label, ...others}: ButtonProps) => {
  return <button disabled={others.disabled} {...others}>{label}</button>;
};

export default Button;