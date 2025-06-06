import deviseLogo from "../../../public/company.jpg";

export function Company() {
  return (
    <section className="pt-10 flex flex-col justify-center items-center">
      <p className="text-lg">
        Desenvolvido por{" "}
        <a href="#" className="underline">
          Devise
        </a>
      </p>
      <img className="w-20" src={deviseLogo} alt="Logo da empresa Devise" />
    </section>
  );
}
