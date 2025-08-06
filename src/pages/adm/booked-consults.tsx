import { Title } from "@/components/ui/title";
import { Filter } from "./filter";
import { ConsultInformations } from "./consult-informations";

export function BookedConsults() {
  return (
    <div className="flex flex-col gap-10">
      <Title>Consultas agendadas</Title>

      <Filter />
      <ConsultInformations />
    </div>
  );
}
