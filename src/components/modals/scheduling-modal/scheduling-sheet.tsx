import { InputsSection } from "./inputs-section";
import { PetSignUp } from "./pet-signup";
import { Title } from "../../shared/title/index";

export function SchedulingSheet() {
  return (
    <div className="grid gap-10">
      <Title
        className="font-poppins"
        textInBold="Ficha do"
        text="Agendamento"
      />

      <div className="flex gap-5">
        <img src="" alt="Imagem do pet" />

        <InputsSection />
      </div>

      <PetSignUp />
    </div>
  );
}
