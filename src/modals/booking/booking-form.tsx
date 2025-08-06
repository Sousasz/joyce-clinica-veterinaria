import { BookingSheet } from "./booking-sheet";
import { BookingDetails } from "./booking-details";
import { Touchable } from "@/components/ui/touchable";

export function BookingForm() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex justify-around items-center max-[1335px]:flex-col max-[1335px]:gap-20">
        <BookingSheet />
        <BookingDetails />
      </div>
      <Touchable>Concluir agendamento</Touchable>
    </div>
  );
}
