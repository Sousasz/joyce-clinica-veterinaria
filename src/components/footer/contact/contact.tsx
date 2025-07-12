import { OurSociaisMedias } from "./our-sociais-medias";
import { HelpArea } from "./help-area";

export function Contact() {
  return (
    <div className="flex gap-48 max-[600px]:flex-col max-[600px]:gap-16">
      <OurSociaisMedias />
      <HelpArea />
    </div>
  );
}
