import { Title } from "@/components/ui/title";
import { Touchable } from "@/components/ui/touchable";
import { TextArea } from "@/components/ui/text-area";

export function BookingDetails() {
  return (
    <div className="flex flex-col justify-center gap-20">
      <div className="flex flex-col gap-5">
        <Title className="text-emerald-900">Descrição breve</Title>

        <TextArea /> 
      </div>

      <div className="flex flex-col gap-5">
        <Title className="text-emerald-900">Data e hora</Title>
        <div className="text-center">Calendar</div>
      </div>

      <Touchable>Concluir agendamento</Touchable>
    </div>
  );
}
