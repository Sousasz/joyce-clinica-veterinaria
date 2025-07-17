import { Touchable } from "@/components/ui/touchable";
import { SignUpPetInputsSection } from "./signup-pet-inputs-section";

export function SignUpPetForm() {
  return (
    <div className="flex flex-col justify-center w-full gap-8 ">
      <SignUpPetInputsSection />
      <Touchable>Concluído</Touchable>
    </div>
  );
}
