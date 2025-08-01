import { medicines } from "@/constants/medicines";

export function MedicinesInjectablesList() {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {medicines.map((medicine, index) => {
          return (
            <div className="flex flex-col gap-1">
              <li className="underline list-disc text-xl" key={index}>
                {medicine.name}
              </li>

              <p className="">{medicine.description}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
