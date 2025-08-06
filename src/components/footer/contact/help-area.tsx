import { GrayText } from "@/components/ui/gray-text";
import { HelpAreaLinks } from "./help-area-links";

export function HelpArea() {
  return (
    <div className="flex flex-col gap-3">
      <GrayText>AJUDA E CONTATO</GrayText>
      <HelpAreaLinks />
    </div>
  );
}
