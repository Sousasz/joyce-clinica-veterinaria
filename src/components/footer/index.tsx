import { Contact } from "./contact";
import { Logo } from "./logo"
import { Company } from "./company";

export function Footer() {
  return (
    <footer className="w-full flex flex-col p-14">
      <section className="flex justify-between">
        <Logo />
        <Contact />
      </section>

      <Company />
    </footer>
  );
}
