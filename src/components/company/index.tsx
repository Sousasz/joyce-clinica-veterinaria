import deviseLogo from "../../../public/Devise.jpg"

export function Company() {
  return (
    <section className="pt-10 flex flex-col justify-center items-center">
      <p className="text-lg">
        Desenvolvido por <span className="underline">Devise</span>
      </p>
      <img className="w-20" src={deviseLogo} alt="Logo da empresa Devise" />
    </section>
  );
}
