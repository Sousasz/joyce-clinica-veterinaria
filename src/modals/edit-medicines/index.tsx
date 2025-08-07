import { MedicinesList } from "../medicines/medicines-list";
import { MedicinesInjectablesList } from "../medicines-injectables/medicines-injectables-list";
import { AddMedicinesModal } from "../add-medicines";
import { Touchable } from "@/components/ui/touchable";
import { TextArea } from "@/components/ui/text-area";
import { Input } from "@/components/ui/shadcn/input";
import { v4 } from "uuid";
import { useState, FormEvent, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";

type Medicine = {
  id: string;
  medicineName: string;
  description: string;
  medicineType: MedicineType;
};

type MedicineType = "injectable-medicines" | "no-injectables-medicines";

export function EditMedicinesModal() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [medicineType, setMedicineType] = useState<MedicineType>(
    "injectable-medicines"
  );

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    
    let duplicate = false;

    medicines.map((medicine) => {
      if (medicineName === medicine.medicineName) {
        duplicate = true;
      }
    });

    const newMedicine: Medicine = {
      id: v4(),
      medicineName,
      description,
      medicineType,
    };

    if(medicineName === "") {
      return null
    }

    if (duplicate) {
      return null;
    } else {
      setMedicines([...medicines, newMedicine]);
    }

    setMedicineName("");
    setDescription("");
    setMedicineType("injectable-medicines");
  }

  return (
    <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light font-poppins bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-scroll scrollbar-hide">
        <DialogHeader className="max-w-full flex items-center">
          MEDICAMENTOS
        </DialogHeader>

        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-2xl">Não injetáveis:</h4>
            <MedicinesList medicines={medicines} />
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-2xl">Injetáveis:</h4>
            <MedicinesInjectablesList medicines={medicines} />
          </div>
        </div>

        <Dialog>
          <DialogTrigger>
            <Touchable>Adicionar medicamento</Touchable>
          </DialogTrigger>

          <DialogContent className="shadow-default bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat rounded-4xl font-poppins">
            <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5 max-h-[80vh] overflow-y-scroll scrollbar-hide">
              <form onSubmit={onFormSubmit} className="flex flex-col gap-7">
                <div className="flex flex-col gap-5">
                  <Input
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setMedicineName(e.target.value)
                    }
                    placeholder="Nome do medicamento"
                  />
                  <TextArea
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setDescription(e.target.value)
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="medicine-type"
                      value="no-injectables-medicines"
                      checked={medicineType === 'no-injectables-medicines'}
                      onChange={(e) =>
                        setMedicineType(e.target.value as MedicineType)
                      }
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
                      checked={medicineType === 'injectable-medicines'}
                      onChange={(e) =>
                        setMedicineType(e.target.value as MedicineType)
                      }
                    />
                    <label htmlFor="injectables-medicines">
                      Medicamento injetável
                    </label>
                  </div>
                </div>

                <Touchable>Adicionar</Touchable>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DialogContent>
  );
}
