import { FaInstagram } from "react-icons/fa";
import { Subtitle } from "@/components/ui/subtitle";

export function OurSociaisMedias() {
  return (
    <div className="flex flex-col justify-start items-center max-[600px]:items-start gap-2">
      <Subtitle>Nossas redes</Subtitle>

      <div className="flex items-center gap-2">
        <FaInstagram className="size-7" />
        <a href="https://www.instagram.com/seupetcomavet/">@seupetcomavet</a>
      </div>
    </div>
  );
}
