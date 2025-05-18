import avatarImage from "../../../public/avatar.jpg";

export function Review() {
  return (
    <div className="flex gap-5">
      <img className="w-12 h-12" src={avatarImage} alt="Imagem do cliente" />
      <div>
        {/* Stars from review */}
        <p className="max-w-[550px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          distinctio nesciunt aliquam fugit ex maxime commodi recusandae tempore
          voluptates molestias delectus, saepe at consequuntur, enim autem esse
          incidunt sapiente. Cumque non sapiente saepe dolore exercitationem,
          tempore ab. Ea saepe quidem fuga tempore esse consectetur labore
          corrupti fugit. Praesentium provident optio, vitae aliquam quaerat
          ratione culpa, vel illo, ipsam fugiat nihil.
        </p>
      </div>
    </div>
  );
}
