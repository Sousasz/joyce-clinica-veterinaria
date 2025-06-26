

type VacinesProps = {
    type: string;
    name: string;
    description: string;
}[]

export const vacines:VacinesProps = [
    {
     type: "Cães",
     name: "Vacina múltipla (V8 ou V10):",
     description: "Protege contra várias doenças virais e bacterianas, como cinomose, parvovirose, adenovirose, hepatite infecciosa canina, parainfluenza, coronavirose e diferentes tipos de leptospirose."   
    },
    {
     type: "Cães",
     name: "Vacina antirrábica:",
     description: "Essencial e, em muitos lugares, obrigatória por lei, protege contra a raiva, uma doença fatal que pode ser transmitida para humanos."   
    },
    {
     type: "Cães",
     name: "Vacina contra a gripe canina:",
     description: "Protege contra a traqueobronquite infecciosa canina, causada por diferentes vírus e bactérias."   
    },
    {
     type: "Gatos",
     name: "Vacina múltipla (V3, V4 ou V5):",
     description: "Protege contra panleucopenia felina, calicivirose, rinotraqueíte e, dependendo da formulação, contra clamidiose e leucemia felina (FeLV)."   
    },
    {
     type: "Gatos",
     name: "Vacina antirrábica:",
     description: "Essencial e, em muitos lugares, obrigatória por lei, protege contra a raiva, uma doença fatal que pode ser transmitida para humanos."   
    },
    {
     type: "Gatos",
     name: "Vacina contra leucemia felina (FeLV):",
     description: "Recomendada para gatos que têm acesso à rua ou contato com outros gatos."   
    },
]