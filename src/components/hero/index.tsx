import FirstElement from "../../../public/Element 1.svg?react";
import SecondElement from "../../../public/Element 2.svg?react";
import Brand from "../../../public/Brand.png";

export function Hero() {
  return (
    <section className=" w-full h-full ">
      <div className="bg-[#A6E0C5] flex flex-col relative">
        <div className="w-full flex justify-end">
          <FirstElement className="size-48" />
        </div>

        <div className="flex justify-center items-center p-20">
          <div className="h-[30rem] flex justify-center items-center rounded-4xl bg-gray-300 border border-white z-[999px] m-5 left-auto right-auto absolute">
            <img className="w-[50rem] p-20" src={Brand} alt="" />
          </div>
        </div>

        <div className="h-full flex item  s-end">
          <SecondElement className="size-48" />
        </div>
      </div>
    </section>
  );
}
