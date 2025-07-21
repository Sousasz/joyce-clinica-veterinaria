import {

  DialogContent,
  // DialogTrigger,
} from "@/components/ui/shadcn/dialog";

import { AddMedicinesForm } from "./add-medicines-form";

export function AddMedicinesModal() {
  return (
    <DialogContent className="shadow-default bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat rounded-4xl font-poppins">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5 max-h-[80vh] overflow-y-scroll scrollbar-hide">
        <AddMedicinesForm />
      </div>
    </DialogContent>
  );
}
