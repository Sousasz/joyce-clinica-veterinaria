

type userFieldsProps = {
  username: string,
  CPForRG: number,
  phone: number,
  CEP: number,
  numberAdress: number,
  complement: string,
  adress: string,
  neighborhood: string
}[]

export const userFields: userFieldsProps = [
  {
    username: 'John Doe',
    CPForRG: 99999999999,
    phone: 999999999,
    CEP: 9999999,
    numberAdress: 99,
    complement: 'apto 999',
    adress: 'Rua Avenida Avenida',
    neighborhood: 'Perdizes'
  }
]