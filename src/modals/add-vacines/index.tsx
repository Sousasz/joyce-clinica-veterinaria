import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { Touchable } from "@/components/ui/touchable";
import { AddVacinesForm } from "./add-vacines-form";
import { FormEvent } from "react";

type VacineType = "for-dogs" | "for-cats";

type AddVacinesModalProps = {
  onFormSubmit: (e: FormEvent) => void;
  setVacineName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  vacineType: string;
  setVacineType: React.Dispatch<React.SetStateAction<VacineType>>;
};

export function AddVacinesModal({
  onFormSubmit,
  setVacineName,
  setDescription,
  vacineType,
  setVacineType,
}: AddVacinesModalProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Touchable>Adicionar vacina</Touchable>
      </DialogTrigger>

      <DialogContent className="shadow-default bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat rounded-4xl font-poppins">
        <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5 max-h-[80vh] overflow-y-scroll scrollbar-hide">
          <AddVacinesForm
            onFormSubmit={onFormSubmit}
            vacineType={vacineType}
            setVacineName={setVacineName}
            setDescription={setDescription}
            setVacineType={setVacineType}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
