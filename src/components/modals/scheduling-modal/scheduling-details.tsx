import { Title } from "../../shared/title/index";

export function SchedulingDetails() {
  return (
    <div className="flex flex-col justify-center gap-5">
      <Title className="font-poppins" textInBold="Descrição" text="Breve" />

      <textarea
        className="border-2 border-white shadow-default rounded-xl outline-none font-poppins p-2"
        name="description"
        rows={8}
        cols={50}
      ></textarea>

      <Title className="font-poppins " textInBold="Data e" text="Hora" />

      {/* <div>Calendar</div> */}

      <button className="bg-white text-black font-medium px-6 shadow-default h-10 rounded-full cursor-pointer font-poppins">
        Concluir agendamento
      </button>
    </div>
  );
}
