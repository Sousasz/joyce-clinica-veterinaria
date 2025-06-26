import { Title } from "@/components/shared/title";
import { Header } from "@/components/header";
import { ActionButton } from "./action-button";
import { buttons } from "@/constants/buttons";
import { ButtonIcon } from "./action-button";

export function UserProfile() {
  return (
    <div className="w-full h-full font-poppins">
      <Header />

      <div className="flex flex-col w-full mx-20 my-10">
        <Title textInBold="Editar" text="Informações" />

        <div className="flex flex-col gap-8 ">
          {buttons.map((button, index) => {
            return (
              <ActionButton key={index}>
                <span>{button.text}</span>
                 {/* Add icons just for some buttons */}
                <ButtonIcon />
              </ActionButton>
            );
          })}
        </div>
      </div>
    </div>
  );
}
