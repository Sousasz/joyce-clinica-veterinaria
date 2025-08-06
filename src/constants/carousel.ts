
import medicineImage from "../../public/services-images/medicine.jpg"
import clinicalConsutationImage from "../../public/services-images/clinical-consultation.jpg"
import injectableMedicineImage from "../../public/services-images/injectable-medicine.jpg"
import preventiveConsultaionImage from "../../public/services-images/preventive-consultation.jpg"
import vaccinationImage from "../../public/services-images/vaccination.jpg"


type CarouselProps = {
  imgUrl: string,
  type: string
}[]

export const carousel: CarouselProps = [
  {
    imgUrl: medicineImage,
    type: "Medicação"
  },
  {
    imgUrl: clinicalConsutationImage,
    type: "Consulta Clínica"
  },
  {
    imgUrl: injectableMedicineImage,
    type: "Medicação Injetável"
  },
  {
    imgUrl: preventiveConsultaionImage,
    type: "Consulta Preventiva"
  },
  {
    imgUrl: vaccinationImage,
    type: "Vacinação"
  },
]