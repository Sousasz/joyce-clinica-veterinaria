import { Input } from "@/components/ui/shadcn/input";
import { TextArea } from "@/components/ui/text-area";
import { Touchable } from "@/components/ui/touchable";
import { MedicineSelection } from "./medicine-selection";

export function AddMedicinesForm() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <Input placeholder="Nome do medicamento" />
        <TextArea placeholder="Descrição breve" />
      </div>

      <MedicineSelection />

      <Touchable>Adicionar</Touchable>
    </div>
  );
}
