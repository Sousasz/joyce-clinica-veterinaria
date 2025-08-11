// import { VacinesList } from "./vacines-list";

import { DialogContent, DialogHeader } from "@/components/ui/shadcn/dialog";

export function VacinesModal() {
  return (
    <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light font-poppins bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-scroll scrollbar-hide">
        <DialogHeader className="max-w-full flex items-center text-3xl">
          VACINAS
        </DialogHeader>

        {/* <VacinesList vacines={vacines}/> */}
      </div>
    </DialogContent>
  );
}
