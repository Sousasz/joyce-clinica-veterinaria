import { Input } from "@/components/ui/shadcn/input";
import { TextArea } from "@/components/ui/text-area";
import { Touchable } from "@/components/ui/touchable";
import { useState } from "react";
import { v4 } from "uuid";
import { FormEvent, ChangeEvent } from "react";

type Medicine = {
  id: string;
  medicineName: string;
  description: string;
  medicineType: MedicineType;
};

type MedicineType = "injectable-medicines" | "no-injectables-medicines";

export function AddMedicinesForm() {
  const [medicine, setMedicine] = useState<Medicine[]>([]);

  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [medicineType, setMedicineType] = useState<MedicineType>(
    "injectable-medicines"
  );

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();

    const newMedicine: Medicine = {
      id: v4(),
      medicineName,
      description,
      medicineType,
    };

    setMedicine([...medicine, newMedicine]);
    setMedicineName("");
    setDescription("");
    setMedicineType("injectable-medicines");
  }

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
            value={medicineType}
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
            value={medicineType}
            onChange={(e) => setMedicineType(e.target.value as MedicineType)}
          />
          <label htmlFor="injectables-medicines">Medicamento injetável</label>
        </div>
      </div>

      <Touchable>Adicionar</Touchable>
    </form>
  );
}
