import { ConsultDetailsModal } from "@/modals/consult-details";
import { FormField } from "@/components/ui/form-field";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type Consult = {
  typeOfConsult: string;
  clientName: string;
  adress: string;
  date: string;
  hour: string;
};

type ConsultInformationsProps = {
  consult: Consult;
  index: number;
};

export function ConsultInformations({
  consult,
  index,
}: ConsultInformationsProps) {
  return (
    <div
      key={index}
      className="bg-gray-50 shadow-xl/20 border-1 border-gray-200 pt-5 pr-5 pl-5 rounded-4xl w-full"
    >
      <span className="font-bold underline">{consult.typeOfConsult}</span>

      <div className="flex flex-col my-5">
        <div className="flex flex-col">
          <FormField
            className="max-[600px]:truncate"
            fieldType="Nome"
            fieldValue={consult.clientName}
          />
          <FormField
            className="max-[600px]:truncate"
            fieldType="Endereço"
            fieldValue={consult.adress}
          />
        </div>

        <div className="flex max-[600px]:flex-col max-[600px]:gap-5 justify-between w-full">
          <div className="flex max-[600px]:flex-col max-[600px]:gap-0.5 gap-3">
            <FormField
              fieldType="Data"
              fieldValue={format(consult.date, "dd/MM/yyyy", { locale: ptBR })}
            />
            <FormField fieldType="Hora" fieldValue={consult.hour} />
          </div>

          <ConsultDetailsModal />
        </div>
      </div>
    </div>
  );
}
