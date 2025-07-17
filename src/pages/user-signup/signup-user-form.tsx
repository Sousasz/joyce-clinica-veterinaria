import { Touchable } from "@/components/ui/touchable";
import { SignUpUserInputsSection } from "./signup-user-inputs-section";

export function SignUpUserForm() {
  return (
    <div className="flex flex-col justify-center w-full gap-8 ">
      <SignUpUserInputsSection />
      <Touchable>Concluído</Touchable>
    </div>
  );
}
