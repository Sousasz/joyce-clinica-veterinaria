import { ClientRating } from "./client-rating";
import { Title } from "../../ui/title";
import { RatingModal } from "../../../modals/ratings/index";
import { Touchable } from "@/components/ui/touchable";
import { Dialog, DialogTrigger } from "@/components/ui/shadcn/dialog";

export function Ratings() {
  return (
    <section className="flex flex-col items-center gap-10" id="rating">
      <Title>Nossas avaliações</Title>

      <div className="gap-20 grid place-items-center grid-cols-[repeat(auto-fill,_minmax(390px,_1fr))]">
        <ClientRating />
      </div>

      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Touchable buttonType="secondary">Ver mais avaliações</Touchable>
          </DialogTrigger>
          <RatingModal />
        </form>
      </Dialog>
    </section>
  );
}
