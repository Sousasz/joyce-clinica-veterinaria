import { Title } from "@/components/ui/title";
import { consults } from "@/constants/consults";
import { ConsultRateModal } from "../../modals/consult-rate";
import { FormField } from "@/components/ui/form-field";

export function UserConsult() {
  return (
    <div className="flex flex-col gap-10">
      <Title>Suas consultas</Title>

      <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] justify-center items-center">
        {consults.map((consult, index) => {
          return (
            <div
              key={index}
              className="bg-gray-50 shadow-xl/20 border-1 border-gray-200 p-5 rounded-4xl"
            >
              <span className="font-bold underline">
                {consult.typeOfConsult}
              </span>

              <div className="flex flex-col my-8">
                <span>{consult.clientName}</span>
                <FormField
                  className="max-[330px]:truncate"
                  fieldType="Endereço: "
                  fieldValue={consult.adress}
                />
              </div>

              <div className="flex max-[330px]:flex-col max-[330px]:gap-3 justify-between">
                <div className="flex max-[330px]:flex-col max-[330px]:gap-1 gap-5">
                  <FormField fieldType="Data" fieldValue={consult.date} />
                  <FormField fieldType="Hora" fieldValue={consult.hour} />
                </div>

                <ConsultRateModal />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
