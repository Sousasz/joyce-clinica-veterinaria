import { Title } from "../../shared/title/index";
import { InputsSection } from "./inputs-section";

export function SchedulingMainContent() {
  return (
    <div className="flex justify-between items-center gap-10 h-full">
      <div className="grid gap-2">
        <Title
          className="font-poppins"
          textInBold="Ficha do"
          text="Agendamento"
        />

        <div className="flex gap-5">
          <img src="" alt="Imagem do pet" />

          <InputsSection />
        </div>

        <div className="flex flex-col justify-center font-poppins text-sm">
          <p className="text-center">
            Caso ainda nao tenha seu animal cadastrado, clique neste botão para
            cadastrá-lo
          </p>
          <a className="font-bold text-center underline" href="">
            Cadastrar Novo Animal
          </a>
        </div>
      </div>

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
    </div>
  );
}
