import { MedicinesModal } from "../../../modals/medicines-modal/index";
import { MedicinesInjectablesModal } from "../../../modals/medicines-injectables-modal/index";
import { VacinesModal } from "../../../modals/vacines-modal/index";

import { Dialog, DialogTrigger } from "@/components/ui/shadcn/dialog";

type Service = {
  imgUrl: string;
  type: string;
};

type CarouselItemContentProps = {
  service: Service;
};

const modalComponents: Record<string, JSX.Element> = {
  "Medicação": <MedicinesModal />,
  "Medicação Injetável": <MedicinesInjectablesModal />,
  "Vacinação": <VacinesModal />,
};

export function CarouselItemContent({ service }: CarouselItemContentProps) {
  const ModalComponent = modalComponents[service.type] || null;

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

          {ModalComponent}
        </form>
      </Dialog>
    </>
  );
}
