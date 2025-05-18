import { Hero } from "./hero";
import { OurServices } from "./our-services";
import { Scheduling } from "./scheduling";
import { Reviews } from "./reviews";

export function Main() {
  return (
    <main className="flex flex-col items-center gap-36 p-8">
      <Hero />
      <OurServices />
      <Scheduling />
      <Reviews />
    </main>
  );
}
