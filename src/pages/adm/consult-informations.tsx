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
      className="bg-gray-50 shadow-xl/20 border-1 border-gray-200 p-5 rounded-4xl"
    >
      <span className="font-bold underline">{consult.typeOfConsult}</span>

      <div className="flex flex-col my-8">
        <span>{consult.clientName}</span>
        <FormField
          className="max-[330px]:truncate"
          fieldType="Endereço"
          fieldValue={consult.adress}
        />
      </div>

      <div className="flex max-[330px]:flex-col max-[330px]:gap-3 justify-between w-full">
        <div className="flex max-[330px]:flex-col max-[330px]:gap-1 gap-5">
          <FormField
            fieldType="Data"
            fieldValue={format(consult.date, "dd/MM/yyyy", { locale: ptBR })}
          />
          <FormField fieldType="Hora" fieldValue={consult.hour} />
        </div>

        <ConsultDetailsModal />
      </div>
    </div>
  );
}
