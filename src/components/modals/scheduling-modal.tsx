import { Button } from "@/components/ui/button"
import { Title } from "../shared/title"
import { Touchable } from "../shared/touchable"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function SchedulingModal() {
  return (
    <Dialog>
      <form>

        <DialogTrigger asChild>
          <Touchable>Clique aqui para agendar uma consulta</Touchable>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">AGENDAMENTO</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <Title textInBold="Ficha do" text="Agendamento" />
            <div className="grid gap-3">
              <Input id="name-1" name="name" placeholder="Nome:" />
            </div>

            <div className="grid gap-3">
                {/* Combobox */}
              <Input id="name-1" name="name" placeholder="Espécie:" />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
