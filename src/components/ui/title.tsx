// import TitleAsset from "../../../../public/assets/title-asset.svg?react";

type TitleProps = {
  textInBold?: string;
  text?: string;
  className?: string;
};

export function Title({ textInBold, text, className }: TitleProps) {
  return (
    <div className="max-w-full flex justify-center">
      <h3 className="text-2xl relative text-center ">
        <span className={`font-bold text-green-light ${className}`}>
          {textInBold}
        </span>{" "}
        {text}
      </h3>
    </div>
  );
}
