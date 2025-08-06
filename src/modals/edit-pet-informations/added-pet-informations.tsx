import { PetFields } from "./pet-fields";
import { Touchable } from "@/components/ui/touchable";

export function AddedPetInformations() {
  return (
    <div className="flex flex-col gap-10">
      <PetFields />
      <Touchable>Concluído</Touchable>
    </div>
  );
}
