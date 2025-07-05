import { GoPencil } from "react-icons/go";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { IconType } from "react-icons/lib";

type admButtonProps = {
    text: string;
    icon: IconType
}[]


export const admButtons:admButtonProps = [
    {
        text: "Editar medicamentos utilizados",
        icon: GoPencil,
    },
    {
        text: "Editar vacinas utilizadas",
        icon: GoPencil,
    },
    {
        text: "Ver avaliações",
        icon: LiaCommentDotsSolid,
    },
]