import devise from "../../../../public/company.jpg";

export function DevelopmentCompanyLogo() {
  return (
    <section className="pt-10 flex flex-col justify-center items-center">
      <p className="text-lg text-center">
        Desenvolvido por{" "}
        <a href="#" className="underline">
          Devise
        </a>
      </p>
      <img className="w-20" src={devise} alt="Logo da empresa Devise" />
    </section>
  );
}
