import { Contact } from "@/components/contact";
import { Brand } from "@/components/brand";
import { Company } from "@/components/company";

export function Footer() {
  return (
    <footer className="w-full flex flex-col p-14">
      <section className="flex justify-between">
        <Brand />
        <Contact />
      </section>

      <Company />
    </footer>
  );
}
