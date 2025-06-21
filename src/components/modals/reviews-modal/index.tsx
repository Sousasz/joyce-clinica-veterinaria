import { Touchable } from "../../shared/touchable/index";
import { ReviewsMainContent } from "./reviews-main-content";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Title } from "@/components/shared/title";

export function ReviewsModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Touchable>Ver mais avaliações</Touchable>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light">
          <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-scroll">
            <DialogHeader className="max-w-full flex items-center">
              <Title className="font-poppins" textInBold="Nossas" text="Avaliações" />
            </DialogHeader>

            <ReviewsMainContent />
          </div>


        </DialogContent>
      </form>
    </Dialog>
  );
}
