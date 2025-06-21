import { Review } from "./review";
import { Title } from "../shared/title";
import { ReviewsModal } from "../modals/reviews-modal";

export function Reviews() {
  return (
    <section className="flex flex-col items-center gap-10" id="reviews">
      <Title textInBold="Nossas" text="avaliações" />

      <div className="gap-20 grid place-items-center grid-cols-[repeat(auto-fill,_minmax(390px,_1fr))]">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>

      <ReviewsModal />
    </section>
  );
}
