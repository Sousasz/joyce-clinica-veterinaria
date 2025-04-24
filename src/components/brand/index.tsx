import dogImage from "../../../public/Logo.png";

export function Brand() {
  return (
    <div className="flex gap-5 justify-center items-center h-fit">
      <img className="size-20" src={dogImage} alt="" />
      <p>Veterinaria Dra. Joyce Oliveira</p>
    </div>
  );
}
