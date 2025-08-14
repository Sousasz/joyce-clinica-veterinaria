

type consultsProps = {
  typeOfConsult: string,
  clientName: string,
  adress: string,
  date: string // Add lib for calendar
  hour: string // Add lib for calendar
}[]

export const consults:consultsProps = [
  {
    typeOfConsult: "Vacinação",
    clientName: "John Doe",
    adress: "Rua Avenida Avenida, 123",
    date: "05-02-2025",
    hour: "23:59"
  },
  {
    typeOfConsult: "Vacinação",
    clientName: "John Doe",
    adress: "Rua Avenida Avenida, 123",
    date: "06-07-2025",
    hour: "23:59"
  },
  {
    typeOfConsult: "Vacinação",
    clientName: "John Doe",
    adress: "Rua Avenida Avenida, 123",
    date: "12-31-2025",
    hour: "23:59"
  },
  {
    typeOfConsult: "Vacinação",
    clientName: "John Doe",
    adress: "Rua Avenida Avenida, 123",
    date: "12-31-2025",
    hour: "23:59"
  },
]