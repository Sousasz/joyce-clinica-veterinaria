import { medicines } from "@/constants/medicines";

export function MedicinesList() {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {medicines.map((medicine, index) => {
          return (
            <div key={index} className="flex flex-col gap-1">
              <li className="underline list-disc text-xl">
                {medicine.name}
              </li>

              <p>{medicine.description}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
