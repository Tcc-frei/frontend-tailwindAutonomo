import "/src/index.css";
import { List } from "lucide-react";
import { Zap } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [modalLista, setModalLista] = useState(false);
  const [lista, setLista] = useState(false);

  useEffect(() => {
    if (modalLista == false) {
      setLista(true);
    }
  }, [modalLista]);

  return (
    <header className="flex justify-between items-center h-14  p-4  min-w-full">
      <div className="flex items-center gap-4 max-xs:gap-2">
        <img
          className="animate-move-lightning w-8 h-8"
          src="/images/Bolt.svg"
          alt="Imagem Raio"
        />
        <h1 className="font-SquadaOne text-4xl max-xs:text-2xl"> ELETHRONOS</h1>
      </div>

      <div>
        <ul className="flex items-center gap-5 font-Roboto ">
          <li
            onClick={() => setModalLista(!modalLista)}
            className="transform hover:scale-105 hover:bg-zinc-400 hover:shadow-lg  py-2 px-3 rounded-lg transition-all duration-300 ease-in-out font-medium hover:text-white cursor-pointer hidden lista:block"
          >
            <List />
          </li>
          {modalLista && (
            <div className="">
              <div className="bg-white min-w-full z-20 mt-5 py-7 h-screen absolute right-0 flex flex-col gap-6 items-center shadow-2xl ">
                <Link to="/" className="min-w-full text-center">
                  <li className="transform hover:scale-105 hover:bg-zinc-400 hover:shadow-lg  py-2 px-3 rounded-lg transition-all duration-300 ease-in-out font-medium hover:text-white">
                    Home
                  </li>
                </Link>
                <Link to="/about" className="min-w-full text-center">
                  <li className="transform hover:scale-105 hover:bg-zinc-400 hover:shadow-lg  py-2 px-3 rounded-lg transition-all duration-300 ease-in-out font-medium hover:text-white">
                    Sobre nós
                  </li>
                </Link>
                <Link to="/contact" className="min-w-full text-center">
                  <li className="hover:scale-105 hover:bg-zinc-400  transform hover:shadow-lg  py-2 px-3 rounded-lg transition-all duration-300 ease-in-out  font-medium hover:text-white">
                    Contato
                  </li>
                </Link>
              </div>
            </div>
          )}
          {lista && (
            <div>
              <ul className="flex items-center gap-5 font-Roboto lista:hidden">
                <Link to="/">
                  <li className="transform hover:scale-105 hover:bg-zinc-400 hover:shadow-lg py-2 px-3 rounded-lg transition-all duration-300 ease-in-out font-medium hover:text-white">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li className="transform hover:scale-105 hover:bg-zinc-400 hover:shadow-lg py-2 px-3 rounded-lg transition-all duration-300 ease-in-out font-medium hover:text-white">
                    Sobre nós
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="transform hover:scale-105 hover:bg-zinc-400 hover:shadow-lg py-2 px-3 rounded-lg transition-all duration-300 ease-in-out  font-medium hover:text-white">
                    Contato
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
}
