import { Touchable } from "@/components/ui/touchable";
import { RatingMainContent } from "./rating-main-content";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { Title } from "@/components/ui/title";

export function RatingModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Touchable>Ver mais avaliações</Touchable>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light">
          <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10">
            <DialogHeader className="max-w-full flex items-center">
              <Title
                className="font-poppins"
                textInBold="Nossas"
                text="Avaliações"
              />
            </DialogHeader>

            <RatingMainContent />
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
