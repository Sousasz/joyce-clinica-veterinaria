import { Hero } from "./hero";
import { OurServices } from "./our-services";
import { Scheduling } from "./scheduling";
import { Reviews } from "./reviews";
import { Areas } from "./areas";
import { Chatbot } from "./chatbot";

export function Main() {



  return (
    <main className="flex flex-col items-center gap-36 p-8" id="home">
      <Hero />
      <OurServices />
      <Scheduling />
      <Reviews />
      <Areas />
      <Chatbot />
    </main>
  );
}
