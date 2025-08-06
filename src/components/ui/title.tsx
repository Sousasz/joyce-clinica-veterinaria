// import TitleAsset from "../../../../public/assets/title-asset.svg?react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Title({ children, className, ...rest }: TitleProps) {
  return (
    <div className="flex flex-col items-center">
      <h3
        {...rest}
        className={`text-4xl relative text-center font-medium text-green-dark font-poppins ${className}`}
      >
        {children}
      </h3>
    </div>
  );
}
