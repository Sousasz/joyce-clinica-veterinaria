import joycePhoto from "../../../public/joyce-photo.jpg"

export function About() {
  return (
    <div className="flex gap-10">
      <img
        className="max-w-96 shadow-default"
        src={joycePhoto}
        alt="Imagem da Dr. Joyce"
      />
      <p className="max-w-[536px] text-shadow-2xs">
        Lorem ipsum dolor sit amet consectetur. Faucibus a et et molestie urna
        sit eget mauris. Ullamcorper erat faucibus enim tortor semper dignissim
        turpis cursus. Blandit in eget quis pulvinar. Varius fringilla pharetra
        magnis potenti. In at ligula neque tellus amet vulputate justo. Enim
        feugiat urna quam auctor sollicitudin in faucibus sit nec. Quam faucibus
        amet elementum id id mattis vitae sollicitudin enim. Cursus nunc nulla
        aliquam integer lectus diam. Vel cras nulla lacus neque. Rhoncus posuere
        ultrices libero consequat sit.
      </p>
    </div>
  );
}
