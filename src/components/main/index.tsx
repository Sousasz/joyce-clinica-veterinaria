import { Hero } from "../hero";
import { OurServices } from "../our-services";

export function Main() {
  return (
    <main className="flex flex-col items-center gap-36 p-8">
      <Hero />
      <OurServices />
    </main>
  );
}
