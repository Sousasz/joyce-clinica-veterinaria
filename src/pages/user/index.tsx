import { Title } from "@/components/ui/title";
import { Header } from "@/components/header";
import { EditClientInformations } from "@/modals/edit-client-informations";
import { ButtonOfAction } from "@/components/ui/button-of-action";
import { UserConsult } from "./user-consult";
import { Footer } from "@/components/footer";

import { GoPencil } from "react-icons/go";

export function User() {
  return (
    <section className="w-full h-full font-poppins">
      <Header />
      <div className="flex flex-col max-w-screen mx-20 my-10 gap-14">
        <div className="flex flex-col gap-10">
          <Title>Editar informações</Title>

          <div className="flex flex-col gap-8 w-fit max-[600px]:items-center max-[600px]:w-full">
            <EditClientInformations />

            <ButtonOfAction>
              <span>Editar pets</span>
              <GoPencil />
            </ButtonOfAction>

            <ButtonOfAction>
              <span>Excluir conta</span>
            </ButtonOfAction>

            <ButtonOfAction>
              <span>Sair da conta</span>
            </ButtonOfAction>
          </div>

          <UserConsult />
        </div>
      </div>

      <Footer />
    </section>
  );
}
