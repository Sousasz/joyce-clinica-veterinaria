import { Touchable } from "@/components/ui/touchable";
import { SignUpInputsSection } from "./signup-inputs-section";

export function SignUpForm() {
  return (
    <div className="flex flex-col justify-center w-full gap-8 ">
      <SignUpInputsSection />
      <Touchable>Concluído</Touchable>
    </div>
  );
}
