import { Subtitle } from "@/components/ui/subtitle";
import { HelpAreaLinks } from "./help-area-links";

export function HelpArea() {
  return (
    <div className="flex flex-col gap-3">
      <Subtitle>AJUDA E CONTATO</Subtitle>
      <HelpAreaLinks />
    </div>
  );
}
