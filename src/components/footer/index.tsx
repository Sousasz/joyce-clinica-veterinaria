import { Contact } from "@/components/contact";
import { Logo } from "@/components/logo";
import { Company } from "@/components/company";

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
