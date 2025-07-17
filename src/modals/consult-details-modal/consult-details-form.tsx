import { PetDetails } from "./pet-details";
import { ClientDetails } from "./client-details";
import { Description } from "./description";
import { DateAndHour } from "./date-and-hour";

export function ConsultDetailsForm() {
  return (
    <div className="flex justify-between gap-10 font-poppins">
      <PetDetails />

      <ClientDetails />

      <div>
        <Description />
        <DateAndHour />
      </div>
    </div>
  );
}
