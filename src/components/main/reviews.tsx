import { Review } from "./review";
import { Touchable } from "../shared/touchable";

export function Reviews() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h3 className="text-2xl">
        <span className="font-bold text-green-light">Nossas</span> Avaliações
      </h3>

      <div className="gap-20 grid grid-cols-[repeat(auto-fill,_minmax(390px,_1fr))]">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>

      <Touchable>Ver mais avaliações</Touchable>
    </section>
  );
}
