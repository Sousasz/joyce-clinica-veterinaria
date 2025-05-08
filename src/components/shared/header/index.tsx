import { CallToAction } from "@/components/call-to-action";
import { links } from "@/constants/links";
import DogImage from "../../../../public/logo.svg?react";
import avatarImage from "../../../../public/avatar.jpg";

export function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-5 px-10">
        <div className="flex justify-center items-center gap-10">
          <DogImage className="size-16" />
          <nav>
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
        <img className="size-10" src={avatarImage} alt="" />
      </header>

      <CallToAction />
    </>
  );
}
