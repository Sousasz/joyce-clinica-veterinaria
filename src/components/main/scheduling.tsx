import { Touchable } from "../shared/touchable";
import { About } from "./about";
import { Title } from "../shared/title";

export function Scheduling() {
  return (
    <section className="flex flex-col items-center gap-10 w-full" id="scheduling">
      <Title textInBold="Faça seu" text="agendamento" />

      <About />
      
      <Touchable className="m-12">Clique aqui para agendar uma consulta</Touchable>
    </section>
  );
}
