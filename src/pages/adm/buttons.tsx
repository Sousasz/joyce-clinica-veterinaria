import { ButtonOfAction } from "@/components/ui/button-of-action";
import { IconType } from "react-icons/lib";
import { AddMedicinesModal } from "@/modals/add-medicines-modal";
import { RatingModal } from "@/modals/ratings-modal";

import { Dialog, DialogTrigger } from "@/components/ui/shadcn/dialog";

const modalComponent: Record<string, JSX.Element> = {
  Medicamento: <AddMedicinesModal />,
  Vacina: <></>,
  Avaliação: <RatingModal />,
};

type ButtonsOfAction = {
  type: string;
  text: string;
  icon: IconType;
};

type ButtonsProps = {
  Button: ButtonsOfAction;
};

export function Buttons({ Button }: ButtonsProps) {
  const ModalComponent = modalComponent[Button.type] || null;

  return (
    <Dialog>
      <DialogTrigger>
        <ButtonOfAction>
          <span>{Button.text}</span>
          <Button.icon />
        </ButtonOfAction>
      </DialogTrigger>

      {ModalComponent}
    </Dialog>
  );
}
