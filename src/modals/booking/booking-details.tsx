import { Title } from "@/components/ui/title";
import { TextArea } from "@/components/ui/text-area";

export function BookingDetails() {
  return (
    <div className="flex flex-col justify-center items-center gap-14 w-full">
      <div className="flex flex-col gap-5 w-[80%]">
        <Title>Descrição breve</Title>

        <TextArea /> 
      </div>

      <div className="flex flex-col gap-5">
        <Title>Data e hora</Title>
        <div className="text-center">Calendar</div>
      </div>
    </div>
  );
}
