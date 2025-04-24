import { Head5 } from "../../components/shared/head";
import { FaWhatsapp } from "react-icons/fa";

export function HelpArea() {
  return (
    <div className="flex flex-col gap-3">
      <Head5>AJUDA E CONTATO</Head5>

      <div className="flex flex-col gap-4">
        <span>FAQ</span>

        <span>FALE DIRETAMENTE COM A JOYCE</span>

        <span className="flex items-center gap-2">
          <FaWhatsapp className="size-7" color="#00FF88" />
          <a href="#">(11) 9****-****</a>
        </span>

        <p className="max-w-[314px]">
          Nosso serviço de atendimento ao consumidor está disponível para
          atendê-lo de segunda a sexta-feira das 8h às 17h.
        </p>
      </div>
    </div>
  );
}
