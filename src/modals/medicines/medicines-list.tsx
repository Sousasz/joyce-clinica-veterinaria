import { GoPencil, GoTrash } from "react-icons/go";

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

export function MedicinesList({ medicines }: MedicineListProps) {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {medicines.map((medicine, index) => {
          return (
            <>
              {medicine.medicineType === "no-injectables-medicines" && (
                <div key={index} className="flex flex-col gap-1">
                  <div className="flex gap-4 justify-between items-center">
                    <li className="underline list-disc text-xl">
                      {medicine.medicineName}
                    </li>

                    <div className="flex gap-3">
                      <button className="cursor-pointer">
                        <GoPencil className="size-5" />
                      </button>

                      <button className="cursor-pointer">
                        <GoTrash className="size-5" />
                      </button>
                    </div>
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
