import { Input } from "@/components/ui/shadcn/input";

export function BookingInputsSection() {
  return (
    <div className="flex items-center gap-5 max-[550px]:flex-col">
      <img src="" alt="Imagem do pet" />

      <section className="flex flex-col gap-3 bg-red-500">
        <Input name="petname" placeholder="Nome" />

        <Input name="specie" placeholder="Espécie" />

        <Input name="breed" placeholder="Raça" />

        <div className="flex gap-2 max-[550px]:flex-col">
          <Input name="spayed" placeholder="Castrado?" />

          <Input name="male-or-female" placeholder="Sexo" />
        </div>

        <div className="flex gap-2 max-[550px]:flex-col">
          <Input name="weight" placeholder="Peso" />

          <Input name="temperament" placeholder="Temperamento" />
        </div>
      </section>
    </div>
  );
}
