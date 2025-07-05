import { Title } from "@/components/shared/title";
import { consults } from "@/constants/consults";
import { Filter } from "./filter";
import { ConsultDetailsModal } from "./consult-details-modal";


export function AdmConsults() {
  return (
    <div className="flex flex-col gap-10">
      <Title textInBold="Consultas" text="Agendadas" />

      <Filter />

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
                <span className="max-[330px]:truncate">
                  <span className="font-medium">Endereço:</span>{" "}
                  {consult.adress}
                </span>
              </div>

              <div className="flex max-[330px]:flex-col max-[330px]:gap-3 justify-between w-full">
                <div className="flex max-[330px]:flex-col max-[330px]:gap-1 gap-5">
                  <span>
                    <span className="font-medium">Data:</span> {consult.date}
                  </span>
                  <span>
                    <span className="font-medium">Hora:</span> {consult.hour}
                  </span>
                </div>

                <ConsultDetailsModal />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
