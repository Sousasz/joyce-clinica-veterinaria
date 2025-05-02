import FirstElement from "../../../public/Element 1.svg?react";
import SecondElement from "../../../public/Element 2.svg?react";
import Logo from "../../../public/Logo.svg";

export function Main() {
  return (
    <main className="flex flex-col items-center gap-28 p-32">
      <section className="bg-[#A6E0C5] w-full h-full flex flex-col gap-20 ">
        <div className="w-full flex justify-end">
          <FirstElement className="size-48" />
        </div>

        <div className="flex justify-center items-center p-20 h-full">
          <div className="w-full h-full object-contain rounded-4xl bg-gray-300 border border-white">
            <img src={Logo} alt="" />
          </div>
        </div>

        <div className="h-full flex items-end">
          <SecondElement className="size-48" />
        </div>
      </section>
      <p>Hello World</p>
    </main>
  );
}
