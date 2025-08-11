import { Input } from "@/components/ui/shadcn/input";
import { TextArea } from "@/components/ui/text-area";
import { Touchable } from "@/components/ui/touchable";
import { ChangeEvent, FormEvent } from "react";

type VacineType = "for-dogs" | "for-cats";

type AddVacinesFormProps = {
  onFormSubmit: (e: FormEvent) => void;
  setVacineName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  vacineType: string;
  setVacineType: React.Dispatch<React.SetStateAction<VacineType>>;
};

export function AddVacinesForm({
  onFormSubmit,
  setVacineName,
  setDescription,
  vacineType,
  setVacineType,
}: AddVacinesFormProps) {
  return (
    <form onSubmit={onFormSubmit} className="flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setVacineName(e.target.value)
          }
          placeholder="Nome do medicamento"
        />
        <TextArea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição breve"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="vacine-type"
            value="for-dogs"
            checked={vacineType === 'for-dogs'}
            onChange={(e) => setVacineType(e.target.value as VacineType)}
          />
          <label htmlFor="for-dogs">
            Para cães
          </label>
        </div>

        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="vacine-type"
            value="for-cats"
            checked={vacineType === 'for-cats'}
            onChange={(e) => setVacineType(e.target.value as VacineType)}
          />
          <label htmlFor="for-cats">Para gatos</label>
        </div>
      </div>

      <Touchable>Adicionar</Touchable>
    </form>
  );
}
