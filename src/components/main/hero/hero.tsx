import FirstElement from "../../../../public/assets/first-element.svg?react";
import SecondElement from "../../../../public/assets/second-element.svg?react";
import { Brand } from "./brand";

export function Hero() {
  return (
    <section className="w-full h-full">
      <div className="bg-green-light flex flex-col relative">
        <div className="w-full flex justify-end">
          <FirstElement className="size-52 max-[425px]:size-32" />
        </div>

        <Brand />

        <div className="h-full flex items-end">
          <SecondElement className="size-52 max-[425px]:size-32" />
        </div>
      </div>
    </section>
  );
}
