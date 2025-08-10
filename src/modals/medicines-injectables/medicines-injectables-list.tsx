
type Medicine = {
  id: string;
  medicineName: string;
  description: string;
  medicineType: MedicineType;
};

type MedicineType = "injectable-medicines" | "no-injectables-medicines" ;

type MedicineListProps = {
  medicines: Medicine[];
};

export function MedicinesInjectablesList({ medicines }: MedicineListProps) {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {medicines.map((medicine, index) => {
          return (
            <>
              {medicine.medicineType === "injectable-medicines" && (
                <div key={index} className="flex flex-col gap-1">
                  <div className="flex gap-4 justify-between items-center">
                    <li className="underline list-disc text-xl">
                      {medicine.medicineName}
                    </li>
                  </div>
                  <p>{medicine.description}</p>
                </div>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}
