import { DialogContent, DialogHeader } from "@/components/ui/shadcn/dialog";
import { AddVacinesModal } from "../add-vacines";
import { VacinesList } from "../vacines/vacines-list";

import { useState, FormEvent } from "react";
import { v4 } from "uuid";

type Vacine = {
  id: string;
  vacineName: string;
  description: string;
  vacineType: VacineType;
};

type VacineType = "for-dogs" | "for-cats";

export function EditVacinesModal() {
  const [vacines, setVacines] = useState<Vacine[]>([]);

  const [vacineName, setVacineName] = useState("");
  const [description, setDescription] = useState("");
  const [vacineType, setVacineType] = useState<VacineType>("for-dogs");

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();

    let duplicate = false;

    vacines.map((vacine) => {
      if (vacineName === vacine.vacineName) {
        duplicate = true;
      }
    });

    const newVacine: Vacine = {
      id: v4(),
      vacineName,
      description,
      vacineType,
    };

    if (vacineName === "") {
      return null;
    }

    if (duplicate) {
      return null;
    } else {
      setVacines([...vacines, newVacine]);
    }

    setVacineName("");
    setDescription("");
    setVacineType("for-dogs");
  }

  return (
    <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light font-poppins bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-scroll scrollbar-hide">
        <DialogHeader className="max-w-full flex items-center">
          VACINAS
        </DialogHeader>

        <div className="flex flex-col gap-14">
          <VacinesList vacines={vacines} />
        </div>

        <AddVacinesModal
          onFormSubmit={onFormSubmit}
          vacineType={vacineType}
          setVacineName={setVacineName}
          setDescription={setDescription}
          setVacineType={setVacineType}
        />
      </div>
    </DialogContent>
  );
}
