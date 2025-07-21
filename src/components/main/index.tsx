import { Hero } from "./hero/hero";
import { OurServices } from "./carousel/carousel-services";
import { Booking } from "./booking/booking";
import { Ratings } from "./ratings/ratings";
import { Regions } from "./regions/regions";
import { Chatbot } from "./chatbot/chatbot";

export function Main() {
  return (
    <main className="flex flex-col items-center gap-36 p-8" id="home">
      <Hero />
      <OurServices />
      <Booking />
      <Ratings />
      <Regions />
      <Chatbot />
    </main>
  );
}
