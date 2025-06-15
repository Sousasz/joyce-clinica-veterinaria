
type InputProps = {
  name: string,
  placeholder: string,
  // Add tipo do input
}[]

export const inputs: InputProps = [
  { 
    name: 'petname',
    placeholder: 'Nome'
  },
  { 
    name: 'specie',
    placeholder: 'Espécie'
  },
  { 
    name: 'breed',
    placeholder: 'Raça'
  },
  { 
    name: 'date',
    placeholder: 'Data de nascimento / Idade Aproximada'
  },
  { 
    name: 'neutered-or-spayed',
    placeholder: 'Castrado?'
  },
  { 
    name: 'weight',
    placeholder: 'Peso'
  },
  { 
    name: 'male-or-female',
    placeholder: 'Sexo'
  },
  { 
    name: 'temperament',
    placeholder: 'Temperamento'
  },
]