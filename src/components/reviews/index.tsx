import { Review } from "../review";
import { Touchable } from "../shared/touchable";

export function Reviews() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h3 className="text-2xl">
        <span className="font-bold text-green-light">Nossas</span> Avaliações
      </h3>

      <div className="flex flex-col gap-5">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>

      <Touchable>Ver mais avaliações</Touchable>
    </section>
  );
}
