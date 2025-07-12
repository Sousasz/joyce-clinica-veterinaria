import { vacines } from "@/constants/vacines";

export function VacinesMainContent() {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        <h4 className="font-bold text-2xl">Para cães</h4>
        {vacines.map((vacine, index) => {
          return (
            <div key={index} className="flex flex-col gap-1 mx-8">
              {vacine.type === "Cães" && (
                <div>
                  <li className="underline list-disc text-xl">{vacine.name}</li>
                  <p>{vacine.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </ul>

      <ul className="flex flex-col gap-1">
        <h4 className="font-bold text-2xl">Para gatos</h4>
        {vacines.map((vacine, index) => {
          return (
            <div key={index} className="flex flex-col gap-1 mx-8">
              {vacine.type === "Gatos" && (
                <div>
                  <li className="underline list-disc text-xl">{vacine.name}</li>
                  <p>{vacine.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
