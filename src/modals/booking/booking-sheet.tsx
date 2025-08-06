import { BookingInputsSection } from "./booking-inputs-section";
import { SignUpPetNotification } from "./signup-pet-notification";
import { Title } from "@/components/ui/title";

export function BookingSheet() {
  return (
    <div className="grid gap-10">
      <Title className="text-emerald-900 ">Ficha do agendamento</Title>
      <BookingInputsSection />

      <SignUpPetNotification />
    </div>
  );
}
