import { Dialog, DialogHeader, DialogContent, DialogTrigger } from "@/components/ui/shadcn/dialog"
import { Title } from "@/components/ui/title"
import { ButtonOfAction } from "@/components/ui/button-of-action"
import { GoPencil } from "react-icons/go"
import { AddedPetInformations } from "./added-pet-informations"

export function EditPetInformations() {
  return (
    <Dialog>
      <DialogTrigger>
        <ButtonOfAction>
          <span>Editar pets</span>
          <GoPencil />
        </ButtonOfAction>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat">
        <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-scroll scrollbar-hide">
          <DialogHeader>
            <Title>Informações do(s) pet(s)</Title>
          </DialogHeader>

          <AddedPetInformations />
        </div>
      </DialogContent>
    </Dialog>
  )
}