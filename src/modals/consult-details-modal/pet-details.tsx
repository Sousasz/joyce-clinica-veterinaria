import { Title } from "@/components/ui/title";

export function PetDetails() {
  return (
    <div>
      <Title className="text-white" textInBold="Animal" />

      <div className="flex flex-col gap-2">
        <img src="" alt="" />
        <span>Nome: <span className="text-zinc-700">Amora</span></span>
        <span>Espécie: <span className="text-zinc-700">Cachorro</span></span>
        <span>Raça: <span className="text-zinc-700">Pastor alemão</span></span>
        <span>Idade aproximada: <span className="text-zinc-700">8</span></span>

        <div className="flex gap-5">
          <span>Castrado: <span className="text-zinc-700">Sim</span></span>
          <span>Sexo: <span className="text-zinc-700">Macho</span></span>
        </div>

        <div className="flex gap-5">
          <span>Peso: <span className="text-zinc-700">38.5</span></span>
          <span>Temperamento: <span className="text-zinc-700">Equilibrado</span></span>
        </div>
      </div>
    </div>
  );
}
