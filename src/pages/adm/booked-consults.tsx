import { Title } from "@/components/ui/title";
import { ConsultsFilter } from "./consults-filter";

export function BookedConsults() {
  return (
    <div className="flex flex-col gap-10">
      <Title>Consultas agendadas</Title>
      <ConsultsFilter />
    </div>
  );
}
