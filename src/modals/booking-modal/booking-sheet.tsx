import { InputsSection } from "./inputs-section";
import { SignUpPetNotification } from "./signup-pet-notification";
import { Title } from "@/components/ui/title";

export function BookingSheet() {
  return (
    <div className="grid gap-10">
      <Title
        className="font-poppins"
        textInBold="Ficha do"
        text="Agendamento"
      />

      <InputsSection />

      <SignUpPetNotification />
    </div>
  );
}
