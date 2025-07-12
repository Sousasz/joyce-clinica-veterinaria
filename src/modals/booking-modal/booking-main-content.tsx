import { BookingSheet } from "./booking-sheet";
import { BookingDetails } from "./booking-details";

export function BookingMainContent() {
  return (
    <div className="flex justify-between items-center gap-10 h-full">
      <BookingSheet />
      <BookingDetails />
    </div>
  );
}
