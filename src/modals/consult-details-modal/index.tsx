import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";

import { Title } from "@/components/ui/title";
import { ConsultDetailsForm } from "./consult-details-form";

export function ConsultDetailsModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="underline cursor-pointer max-[330px]:text-start max-[330px]:w-fit">
            Ver mais...
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat">
          <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5 overflow-y-scroll scrollbar-hide max-[340px]:-m-3">
            <DialogHeader className="max-w-full flex items-center">
              <DialogTitle className="text-center text-3xl font-poppins font-light p-1 w-80">
                <Title className="max-[340px]:text-xl" textInBold="Detalhe" text="da consulta" />
              </DialogTitle>
            </DialogHeader>

            <ConsultDetailsForm />
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
