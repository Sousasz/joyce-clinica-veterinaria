import heroImage from "../../../public/Hero Image.jpg"

export function Main() {
  return (
    <main className="flex flex-col items-center">
      <img className="max-w-[70rem] mt-10" src={heroImage} alt="Imagem principal" />
    </main>
  )
}