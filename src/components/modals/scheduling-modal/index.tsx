import { Touchable } from "../../shared/touchable/index";
import { SchedulingMainContent } from "./scheduling-main-content";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SchedulingModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Touchable>Clique aqui para agendar uma consulta</Touchable>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light">
          <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10">
            <DialogHeader className="max-w-full flex items-center">
              <DialogTitle className="text-center text-3xl font-poppins font-light p-1 w-80">
                AGENDAMENTO
              </DialogTitle>
            </DialogHeader>

            <SchedulingMainContent />
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
