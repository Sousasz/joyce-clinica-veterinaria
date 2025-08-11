type VacineType = "for-dogs" | "for-cats";

type Vacine = {
  id: string;
  vacineName: string;
  description: string;
  vacineType: VacineType;
};

type VacinesListProps = {
  vacines: Vacine[];
};

export function VacinesList({ vacines }: VacinesListProps) {
  return (
    <div className="flex flex-col gap-12">
      <ul className="flex flex-col gap-0.5 bg-red-500">
        <h4 className="font-bold text-2xl">Para cães:</h4>
        {vacines.map((vacine, index) => {
          return (
            <div key={index} className="flex flex-col gap-1 mx-4">
              {vacine.vacineType === "for-dogs" && (
                <div className="flex flex-col">
                  <li className="underline list-disc text-xl">
                    {vacine.vacineName}
                  </li>
                  <p>{vacine.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </ul>

      <ul className="flex flex-col">
        <h4 className="font-bold text-2xl">Para gatos:</h4>
        {vacines.map((vacine, index) => {
          return (
            <div key={index} className="flex flex-col gap-1 mx-4">
              {vacine.vacineType === "for-cats" && (
                <div>
                  <li className="underline list-disc text-xl">
                    {vacine.vacineName}
                  </li>
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
