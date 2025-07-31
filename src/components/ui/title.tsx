// import TitleAsset from "../../../../public/assets/title-asset.svg?react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Title({ children, className, ...rest }: TitleProps) {
  return (
    <h3
      {...rest}
      className={`text-4xl relative text-center font-medium text-emerald-700  font-poppins ${className}`}
    >
      {children}
    </h3>
  );
}
