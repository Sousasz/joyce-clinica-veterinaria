import { medicines } from "@/constants/medicines"

export function MedicinesMainContent() {
  return( 
    <div className="flex gap-5">
      <ul>
        {medicines.map((medicine, index) => {
          return (
            <li className="underline list-disc" key={index}>{medicine.name}</li>
          )
        })}
      </ul>
    </div>
  )
}