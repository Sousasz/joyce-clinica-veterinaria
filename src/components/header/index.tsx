import { CallToAction } from "./call-to-action";
import { IoIosMenu } from "react-icons/io";
import DogImage from "../../../public/assets/logo.svg?react";
import { UserSignIn } from "@/modals/user-signin";
import { Link } from "react-router-dom";

import { useState } from "react";
import { links } from "@/constants/links";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function onClickToOpenTheMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      <header className="flex justify-between items-center py-5 px-10">
        <div className="flex justify-center items-center gap-10">
          <DogImage className="size-16" />
          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              <li>
                <a href="/#home">Home</a>
              </li>

              <li>
                <Link to="/#services">Nossos serviços</Link>
              </li>

              <li>
                <a href="/#booking">Agendamento</a>
              </li>

              <li>
                <a href="/#rating">Nossas avaliações</a>
              </li>

              <li>
                <a href="/#areas">Áreas atendidas</a>
              </li>

              <li>
                <Link to="/adm">Admin</Link>
              </li>

              <li>
                <Link to="/usuario">Usuário</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-10">
            <UserSignIn />

            <button onClick={onClickToOpenTheMenu} className="cursor-pointer">
              <IoIosMenu className="size-10 block lg:hidden" />
            </button>
          </div>

          {isOpenMenu ? (
            <>
              <div className="w-full flex justify-end">
                <ul className="bg-white border border-b-black border-l-black border-white p-3 flex flex-col gap-5 bottom-0 top-[6.5rem] right-0 absolute z-1 h-80">
                  <li>
                    <a href="/#home">Home</a>
                  </li>

                  <li>
                    <Link to="/#services">Nossos serviços</Link>
                  </li>

                  <li>
                    <a href="/#booking">Agendamento</a>
                  </li>

                  <li>
                    <a href="/#rating">Nossas avaliações</a>
                  </li>

                  <li>
                    <a href="/#areas">Áreas atendidas</a>
                  </li>

                  <li>
                    <Link to="/adm">Admin</Link>
                  </li>

                  <li>
                    <Link to="/usuario">Usuário</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : null}
        </div>
      </header>

      <CallToAction />
    </>
  );
}
