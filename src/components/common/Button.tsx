import { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={`bg-custom-orange hover:bg-amber-500 transition-all duration-300 w-fit px-8 py-5 rounded-sm text-white font-bold cursor-pointer ${className}`}>
      {children}
    </button>
  );
};
