import { Input } from "@/components/ui/shadcn/input";
import { TextArea } from "@/components/ui/text-area";
import { Touchable } from "@/components/ui/touchable";
import { ChangeEvent, FormEvent } from "react";

type MedicineType = "injectables-medicines" | "no-injectables-medicines";

type AddMedicinesFormProps = {
  onFormSubmit: (e: FormEvent) => void;
  setMedicineName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  medicineType: string;
  setMedicineType: React.Dispatch<React.SetStateAction<MedicineType>>;
};

export function AddMedicinesForm({
  onFormSubmit,
  setMedicineName,
  setDescription,
  medicineType,
  setMedicineType,
}: AddMedicinesFormProps) {
  return (
      <form onSubmit={onFormSubmit} className="flex flex-col gap-7">
        <div className="flex flex-col gap-5">
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMedicineName(e.target.value)
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
              name="medicine-type"
              value="no-injectables-medicines"
              checked={medicineType === 'no-injectables-medicines'}
              onChange={(e) => setMedicineType(e.target.value as MedicineType)}
            />
            <label htmlFor="no-injectables-medicines">
              Medicamento não injetável
            </label>
          </div>

          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="medicine-type"
              value="injectables-medicines"
              checked={medicineType === 'injectables-medicines'}
              onChange={(e) => setMedicineType(e.target.value as MedicineType)}
            />
            <label htmlFor="injectables-medicines">Medicamento injetável</label>
          </div>
        </div>

        <Touchable>Adicionar</Touchable>
      </form>
  );
}
