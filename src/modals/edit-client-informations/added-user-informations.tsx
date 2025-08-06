import { Fields } from "./fields";
import { Touchable } from "@/components/ui/touchable";

export function AddedUserInformations() {
  return (
    <div className="flex flex-col gap-10">
      <Fields />
      <Touchable>Concluído</Touchable>
    </div>
  );
}
