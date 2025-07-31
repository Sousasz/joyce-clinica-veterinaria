import areasImage from "../../../../public/areas.png";
import { Title } from "@/components/ui/title";
import { RegionsOfService } from "../regions/regions-of-service";

export function Regions() {
  return (
    <section className="flex flex-col items-center gap-10" id="areas">
      <Title>Áreas atendidas</Title>
      <img src={areasImage} alt="Áreas de atendimento da clínica veterinária" />

      <RegionsOfService />
    </section>
  );
}
