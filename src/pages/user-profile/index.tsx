import { Title } from "@/components/shared/title";
import { Header } from "@/components/header";
import { ActionButton } from "./action-button";
import { buttons } from "@/constants/buttons";
import { Consults } from "./consults";
import { Footer } from "@/components/footer";

export function UserProfile() {
  return (
    <section className="w-full h-full font-poppins">
      <Header />
      <div className="flex flex-col max-w-screen mx-20 my-10 gap-14">
        <div className="flex flex-col gap-10">
          <Title textInBold="Editar" text="Informações" />

          <div className="flex flex-col gap-8 w-fit max-[600px]:items-center max-[600px]:w-full">
            {buttons.map((Button, index) => {
              return (
                <ActionButton key={index}>
                  <span>{Button.text}</span>
                  {Button.hidden ? (
                    <Button.icon className="hidden" />
                  ) : (
                    <Button.icon className="block" />
                  )}
                </ActionButton>
              );
            })}
          </div>

          <Consults />
        </div>
      </div>

      <Footer />
    </section>
  );
}
