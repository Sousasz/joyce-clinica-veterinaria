import { CallToAction } from "./call-to-action";
import { links } from "@/constants/links";
import DogImage from "../../../public/assets/logo.svg?react";
import avatarImage from "../../../public/avatar.jpg";
import { IoIosMenu } from "react-icons/io";

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-5 px-10">
        <div className="flex justify-center items-center gap-10">
          <DogImage className="size-16" />
          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={`#${item.id}`}>{item.link}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex gap-12">
          <img className="size-10" src={avatarImage} alt="" />
          <button className="cursor-pointer">
            <IoIosMenu className="size-10 block lg:hidden" />
          </button>
        </div>
      </header>

      <CallToAction />
    </>
  );
}
