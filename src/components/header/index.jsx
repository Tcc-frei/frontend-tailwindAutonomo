import "/src/index.css";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-14  p-4 ">
      <div className="flex items-center gap-4 ">
        <img
          className="animate-move-lightning"
          src="/images/Bolt.svg"
          alt="Imagem Raio"
        />
        <h1 className="font-SquadaOne text-4xl"> ELETHRONOS</h1>
      </div>

      <div>
        <ul className="flex items-center gap-5 font-Roboto">
          <Link to='/'>
            <li className="transform hover:scale-105 hover:bg-zinc-400 hover:shadow-lg    py-2 px-3 rounded-lg transition-all duration-300 ease-in-out font-medium hover:text-white">
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className="transform hover:scale-105 hover:bg-zinc-400 hover:shadow-lg  py-2 px-3 rounded-lg transition-all duration-300 ease-in-out font-medium hover:text-white">
              Sobre nós
            </li>
          </Link>
          <Link to='/contact'>
            <li className="transform hover:scale-105 hover:bg-zinc-400  transform hover:shadow-lg  py-2 px-3 rounded-lg transition-all duration-300 ease-in-out  font-medium hover:text-white">
              Contato
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
