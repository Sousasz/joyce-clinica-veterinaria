import { Touchable } from "../shared/touchable";
import { About } from "../about";

export function Scheduling() {
  return (
    <section className="flex flex-col items-center gap-10 w-full">
      <h3 className="text-2xl">
        <span className="font-bold text-green-light">Faça seu</span> agendamento
      </h3>

      <About />
      
      <Touchable className="m-12">Clique aqui para agendar uma consulta</Touchable>
    </section>
  );
}
