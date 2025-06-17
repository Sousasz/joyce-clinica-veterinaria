import { InputArea } from "./input-area";

export function InputsSection() {
    return(
      <section className="flex flex-col gap-3">
        <InputArea
          name="petname"
          placeholder="Nome"
        />

        <InputArea
          name="specie"
          placeholder="Espécie"
        />
        
        <InputArea
          name="breed"
          placeholder="Raça"
        />

        <div className="flex gap-2">
          <InputArea
            name="neutered-or-spayed"
            placeholder="Castrado?"
          />

          <InputArea
            name="male-or-female"
            placeholder="Sexo"
          />
        </div>

        <div className="flex gap-2">
          <InputArea
            name="weight"
            placeholder="Peso"
          />

          <InputArea
            name="temperament"
            placeholder="Temperamento"
          />
        </div>
      </section>
    )
}