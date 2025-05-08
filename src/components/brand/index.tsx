import brandImage from "../../../public/Brand.png";

export function Brand() {
  return (
    <div className="flex justify-center items-center p-20">
      <div className="h-[30rem] rounded-4xl bg-transparent border border-white z-[999px] m-5 left-auto right-auto absolute">
        <img className="w-[50rem] p-20" src={brandImage} alt="" />
      </div>
    </div>
  );
}
