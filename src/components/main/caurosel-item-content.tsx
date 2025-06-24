import { MedicinesModal } from "../modals/medicines-modal";
import { MedicinesInjectablesModal } from "../modals/medicines-injectables-modal";
import { VacinesModal } from "../modals/vacines-modal";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

type CarouselItemContentProps = {
  service: object;
};

export function CarouselItemContent({ service }: CarouselItemContentProps) {
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <button className="cursor-pointer">
              <div className="flex justify-center items-center">
                <img
                  className=""
                  src={service.imgUrl}
                  alt={`Imagem do serviço ${service.type}`}
                />
                <span className="break-words max-w-[30%] text-white text-center text-2xl max-[640px]:text-lg max-[463px]:text-sm font-bold absolute -tracking-[-0.15rem]">
                  {service.type}
                </span>
              </div>
            </button>
          </DialogTrigger>

          {service.type === "Medicação" ? (
            <MedicinesModal />
          ) : service.type === "Medicação Injetável" ? (
            <MedicinesInjectablesModal />
          ) : service.type === "Vacinação" ? (
            <VacinesModal />
          ) : null}
        </form>
      </Dialog>
    </>
  );
}
