import { PetDetails } from "./pet-details";
import { ClientDetails } from "./client-details";
import { Description } from "./description";
import { DateAndHour } from "./date-and-hour";

export function ConsultDetailsForm() {
  return (
    <div className="flex justify-between max-[990px]:flex-col max-[990px]:text-center max-[990px]:items-center gap-10 font-poppins">
      <PetDetails />
      <ClientDetails />

      <div>
        <Description />
        <DateAndHour />
      </div>
    </div>
  );
}
