import { AdmWhatsApp } from "./adm-whatsapp";
import { ServiceHoursText } from "./service-hours-text";

export function HelpAreaLinks() {
  return (
    <div className="flex flex-col gap-4">
      <span>FAQ</span>

      <span>FALE DIRETAMENTE COM A JOYCE</span>

      <AdmWhatsApp />

      <ServiceHoursText />
    </div>
  );
}
