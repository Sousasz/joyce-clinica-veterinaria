import { Review } from "./review";
import { Touchable } from "../shared/touchable";
import { Title } from "../shared/title";

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

      <Touchable className="mt-28">Ver mais avaliações</Touchable>
    </section>
  );
}
