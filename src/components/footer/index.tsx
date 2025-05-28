import { Contact } from "./contact";
import { Logo } from "./logo"
import { Company } from "./company";

export function Footer() {
  return (
    <footer className="w-full flex flex-col p-14 mt-22">
      <section className="flex justify-between max-[1105px]:flex-col max-[1105px]:items-center">
        <Logo />
        <Contact />
      </section>

      <Company />
    </footer>
  );
}
