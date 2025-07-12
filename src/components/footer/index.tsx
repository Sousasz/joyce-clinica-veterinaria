import { Contact } from "../footer/contact/contact";
import { AdmLogo } from "../footer/logos/adm-logo"
import { DevelopmentCompanyLogo } from "../footer/logos/development-company-logo";

export function Footer() {
  return (
    <footer className="w-full flex flex-col p-14 mt-22">
      <section className="flex justify-between max-[1105px]:flex-col max-[1105px]:items-center">
        <AdmLogo />
        <Contact />
      </section>

      <DevelopmentCompanyLogo />
    </footer>
  );
}
