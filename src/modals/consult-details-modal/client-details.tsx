import { Title } from "@/components/ui/title";

export function ClientDetails() {
  return (
    <div className="flex flex-col items-center">
      <Title className="text-white" textInBold="Cliente" />

      <div className="flex flex-col gap-2">
        <img src="" alt="" />
        <span>
          Nome completo: <span className="text-zinc-700">John Doe</span>
        </span>
        <span>
          CPF/RG: <span className="text-zinc-700">9999999999</span>
        </span>
        <span>
          Telefone: <span className="text-zinc-700">999999999</span>
        </span>
        <span>
          CEP: <span className="text-zinc-700">0000000</span>
        </span>

        <div className="flex max-[990px]:flex-col gap-2">
          <span>
            Número: <span className="text-zinc-700">00</span>
          </span>
          <span>
            Complemento: <span className="text-zinc-700">apto 999</span>
          </span>
        </div>

        <div className="flex max-[990px]:flex-col gap-2">
          <span>
            Endereço: <span className="text-zinc-700">Rua Avenida Avenida</span>
          </span>
          <span>
            Bairro: <span className="text-zinc-700">Perdizes</span>
          </span>
        </div>
      </div>
    </div>
  );
}
