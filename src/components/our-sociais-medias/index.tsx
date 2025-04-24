import { FaInstagram } from "react-icons/fa";
import { Head5 } from "../shared/head";

export function OurSociaisMedias() {
  return (
    <div className="flex flex-col justify-start items-center gap-2">
      <Head5>NOSSAS REDES</Head5>

      <div className="flex items-center gap-2">
        <FaInstagram className="size-7" />
        <a href="https://www.instagram.com/seupetcomavet/">@seupetcomavet</a>
      </div>
    </div>
  );
}
