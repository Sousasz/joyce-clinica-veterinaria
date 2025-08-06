import { About } from "./about-service";
import { Title } from "../../ui/title";
import { BookingModal } from "../../../modals/booking/index";

export function Booking() {
  return (
    <section
      className="flex flex-col items-center gap-10 w-full"
      id="booking"
    >
      <Title>Faça seu agendamento</Title>

      <About />

      <BookingModal />
    </section>
  );
}
