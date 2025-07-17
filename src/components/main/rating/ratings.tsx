import { ClientRating } from "./client-rating";
import { Title } from "../../ui/title";
import { RatingModal } from "../../../modals/ratings-modal/index";

export function Ratings() {
  return (
    <section className="flex flex-col items-center gap-10" id="reviews">
      <Title textInBold="Nossas" text="avaliações" />

      <div className="gap-20 grid place-items-center grid-cols-[repeat(auto-fill,_minmax(390px,_1fr))]">
        <ClientRating />
      </div>

      <RatingModal />
    </section>
  );
}
