import TitleAsset from "../../../../public/assets/title-asset.svg?react";

type TitleProps = {
  textInBold?: string;
  text?: string;
  className?: string;
};

export function Title({ textInBold, text, className }: TitleProps) {
  return (
    <h3 className={`text-2xl relative ${className}`}>
      <span className="font-bold text-green-light ">
        {textInBold}
      </span>{" "}
      {text}
      {/* <TitleAsset className="relative" /> */}
    </h3>
  );
}
