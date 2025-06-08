import areasImage from "../../../public/areas.png";
import { Title } from "../shared/title";
import { Regions } from "./regions";

export function Areas() {
  return (
    <section className="flex flex-col items-center gap-10" id="areas">
      <Title textInBold="Áreas" text="atendidas" />

      <img src={areasImage} alt="Áreas de atendimento da clínica veterinária" />

      <Regions />
    </section>
  );
}
