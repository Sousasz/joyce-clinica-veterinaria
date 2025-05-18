import DogImage from "../../../public/assets/logo.svg?react";

export function Logo() {
  return (
    <div className="flex gap-5 justify-center items-center h-fit">
      <DogImage className="size-16" />
      <p>Veterinaria Dra. Joyce Oliveira</p>
    </div>
  );
}
