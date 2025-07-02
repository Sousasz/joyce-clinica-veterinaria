import { GoPencil } from "react-icons/go";
import { IconType } from "react-icons/lib";

type buttonProps = {
    text: string;
    icon: IconType
    hidden: boolean
}[]


export const buttons:buttonProps = [
    {
        text: "Editar informações",
        icon: GoPencil,
        hidden: false
    },
    {
        text: "Editar pets",
        icon: GoPencil,
        hidden: false
    },
    {
        text: "Excluir conta",
        icon: GoPencil,
        hidden: true
    },
    {
        text: "Sair da conta",
        icon: GoPencil,
        hidden: true
    },
]