import { DialogContent, DialogHeader } from "@/components/ui/shadcn/dialog";
import { AddMedicinesModal } from "../add-medicines";

import { useState, FormEvent } from "react";
import { v4 } from "uuid";

import { GoPencil, GoTrash } from "react-icons/go";

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
  const [medicineType, setMedicineType] = useState<MedicineType>("no-injectables-medicines");

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

    if (medicineName === "") {
      return null;
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
            <div>
              <ul className="flex flex-col gap-3">
                {medicines.map((medicine, index) => {
                  return (
                    <>
                      {medicine.medicineType === "no-injectables-medicines" && (
                        <div key={index} className="flex flex-col gap-1">
                          <div className="flex gap-4 justify-between items-center">
                            <li className="underline list-disc text-xl">
                              {medicine.medicineName}
                            </li>

                            {/* Add just to the adm */}
                            <div className="flex gap-3">
                              <button className="cursor-pointer">
                                <GoPencil className="size-5" />
                              </button>

                              <button className="cursor-pointer">
                                <GoTrash className="size-5" />
                              </button>
                            </div>
                          </div>
                          <p>{medicine.description}</p>
                        </div>
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-2xl">Injetáveis:</h4>
            <div>
              <ul className="flex flex-col gap-3">
                {medicines.map((medicine, index) => {
                  return (
                    <>
                      {medicine.medicineType === "injectable-medicines" && (
                        <div key={index} className="flex flex-col gap-1">
                          <div className="flex gap-4 justify-between items-center">
                            <li className="underline list-disc text-xl">
                              {medicine.medicineName}
                            </li>

                            <div className="flex gap-3">
                              <button className="cursor-pointer">
                                <GoPencil className="size-5" />
                              </button>

                              <button className="cursor-pointer">
                                <GoTrash className="size-5" />
                              </button>
                            </div>
                          </div>
                          <p>{medicine.description}</p>
                        </div>
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <AddMedicinesModal
          onFormSubmit={onFormSubmit}
          medicineType={medicineType}
          setDescription={setDescription}
          setMedicineName={setMedicineName}
          setMedicineType={setMedicineType}
        />
      </div>
    </DialogContent>
  );
}
