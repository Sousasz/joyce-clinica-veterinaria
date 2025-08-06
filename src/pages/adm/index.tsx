import { Title } from "@/components/ui/title";
import { Header } from "@/components/header";

import { admButtons } from "@/constants/adm-buttons";
import { BookedConsults } from "./booked-consults";
import { Footer } from "@/components/footer";
import { Buttons } from "./buttons";

export function Adm() {
  return (
    <section className="w-full h-full font-poppins">
      <Header />
      <div className="flex flex-col max-w-screen mx-20 my-10 gap-14">
        <div className="flex flex-col gap-10">
          <Title>Setor administrativo</Title>

          <div className="flex flex-col gap-8 w-fit max-[600px]:items-center max-[600px]:w-full">
            {admButtons.map((Button, index) => {
              return (
                <div key={index}>
                  <Buttons Button={Button} />
                </div>
              );
            })}
          </div>

          <BookedConsults />
        </div>
      </div>

      <Footer />
    </section>
  );
}
