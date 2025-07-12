import { Title } from "@/components/ui/title";
import { Header } from "@/components/header";
import { ActionButton } from "@/components/ui/buttons-of-action";
import { userButtons } from "@/constants/user-buttons";
import { UserConsult } from "./user-consult";
import { Footer } from "@/components/footer";

export function User() {
  return (
    <section className="w-full h-full font-poppins">
      <Header />
      <div className="flex flex-col max-w-screen mx-20 my-10 gap-14">
        <div className="flex flex-col gap-10">
          <Title textInBold="Editar" text="Informações" />

          <div className="flex flex-col gap-8 w-fit max-[600px]:items-center max-[600px]:w-full">
            {userButtons.map((Button, index) => {
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

          <UserConsult />
        </div>
      </div>

      <Footer />
    </section>
  );
}
