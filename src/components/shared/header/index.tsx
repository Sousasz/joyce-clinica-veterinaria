import dogImage from "../../../../public/Logo.png";
import { CallToAction } from "@/components/call-to-action";
import { links } from "@/constants/links";

export function Header() {
  return (
    <>
      <header className="flex items-center gap-10 py-5 px-16">
        <img className="size-16" src={dogImage} alt="Logo da Clínica" />
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
      </header>

      <CallToAction />
    </>
  );
}
