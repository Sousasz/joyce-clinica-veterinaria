import { AddedUserInformations } from "./added-user-informations";
import { ButtonOfAction } from "@/components/ui/button-of-action";
import { Title } from "@/components/ui/title";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/shadcn/dialog";

import { GoPencil } from "react-icons/go";

export function EditClientInformations() {
  return (
    <Dialog>
      <DialogTrigger>
        <ButtonOfAction>
          <span>Editar informações</span>
          <GoPencil />
        </ButtonOfAction>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat">
        <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-scroll scrollbar-hide">
          <DialogHeader>
            <Title>Suas informações</Title>
          </DialogHeader>

          <AddedUserInformations />
        </div>
      </DialogContent>
    </Dialog>
  );
}
