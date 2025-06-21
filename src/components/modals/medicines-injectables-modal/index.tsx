import { MedicinesInjectablesMainContent } from "./medicines-injectables-main-content";

import {
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";


// I need to change the content of component
export function MedicinesInjectablesModal() {
  return (
    <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light font-poppins">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-scroll">
        <DialogHeader className="max-w-full flex items-center">
          MEDICAMENTOS
        </DialogHeader>

        <MedicinesInjectablesMainContent />
      </div>
    </DialogContent>
  );
}
