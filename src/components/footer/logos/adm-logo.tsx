import DogImage from "../../../../public/assets/logo.svg?react";

export function AdmLogo() {
  return (
    <div className="flex gap-5 justify-center items-center h-fit max-[600px]:py-10">
      <DogImage className="size-16" />
      <p>Veterinaria Dra. Joyce Oliveira</p>
    </div>
  );
}
