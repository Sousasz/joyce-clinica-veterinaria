// import TitleAsset from "../../../../public/assets/title-asset.svg?react";

type TitleProps = {
  textInBold?: string;
  text?: string;
  className?: string;
};

export function Title({ textInBold, text, className }: TitleProps) {
  return (
    <div className="max-w-full flex justify-center">
      <h3 className={`text-2xl relative text-center bg-white px-5 p-1 w-fit h-fit shadow-md ${className}`}>
        <span className="font-bold text-green-light ">
          {textInBold}
        </span>{" "}
        {text}
        
        {/* <TitleAsset className="relative" /> */}
      </h3>
    </div>
  );
}
