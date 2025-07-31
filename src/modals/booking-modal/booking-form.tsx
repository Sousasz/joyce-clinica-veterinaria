import { BookingSheet } from "./booking-sheet";
import { BookingDetails } from "./booking-details";

export function BookingForm() {
  return (
    <div className="flex justify-around items-center h-full max-[1335px]:flex-col max-[1335px]:gap-20 ">
      <BookingSheet />
      <BookingDetails />
    </div>
  );
}
