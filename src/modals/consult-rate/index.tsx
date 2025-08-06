import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";

import { ConsultRateForm } from "./consult-rate-form";

export function ConsultRateModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="underline cursor-pointer max-[330px]:text-start max-[330px]:w-fit">
            Avaliar consulta
          </button>
        </DialogTrigger>

        <DialogContent className="shadow-default bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat rounded-4xl ">
          <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5 max-h-[80vh] overflow-y-auto">
            <DialogHeader className="max-w-full flex items-center">
              <DialogTitle className="text-center text-3xl font-poppins font-light p-1 w-80">
                Avaliar
              </DialogTitle>
            </DialogHeader>

            <ConsultRateForm />
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
