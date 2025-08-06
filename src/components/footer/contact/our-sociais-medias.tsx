import { FaInstagram } from "react-icons/fa";
import { GrayText } from "@/components/ui/gray-text";

export function OurSociaisMedias() {
  return (
    <div className="flex flex-col justify-start items-center max-[600px]:items-start gap-2">
      <GrayText>Nossas redes</GrayText>

      <div className="flex items-center gap-2">
        <FaInstagram className="size-7" />
        <a href="https://www.instagram.com/seupetcomavet/">@seupetcomavet</a>
      </div>
    </div>
  );
}
