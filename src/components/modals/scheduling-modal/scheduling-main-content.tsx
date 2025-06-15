import { Title } from "../../shared/title/index";
import { Input } from "@/components/ui/input";
import { inputs } from "@/constants/inputs";

export function SchedulingMainContent() {
  return (
    <div className="flex justify-between">
      <div>
        <div className="grid gap-4">
          <Title
            className="font-poppins"
            textInBold="Ficha do"
            text="Agendamento"
          />
          {inputs.map((input, index) => {
            return (
              <div key={index} className="grid gap-3">
                <Input
                  className="font-poppins rounded-full shadow-lg border-white"
                  name={input.name}
                  placeholder={input.placeholder}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <button className="bg-white text-black font-medium px-6 shadow-default h-10 rounded-full cursor-pointer font-poppins">
          Concluir agendamento
        </button>
      </div>
    </div>
  );
}
