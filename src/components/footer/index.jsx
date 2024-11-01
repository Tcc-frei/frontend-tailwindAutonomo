import { Link } from "react-router-dom";
import "/src/index.css";

export default function Footer() {
  return (
    <div className="flex bg-footer-cinza justify-between items-center">
      <img
        src="/images/mapaFooter.svg"
        alt="mapa footer"
        className=""
      />
      <div className="flex flex-col  text-white font-Roboto absolute ml-28">
        <h1 className="text-3xl font-medium flex gap-2 items-center justify-center mb-4">
          {" "}
          <img src="/images/lampadaWhite.svg" alt="" className="animate-blink"/> ELÉTRICA
        </h1>
        <p>electro@gmail.com</p>
        <p>+55119999999</p>
      </div>
      <div className="flex flex-col gap-4 items-start mr-24 ">
        <h6 className="text-xl font-medium text-white">Redes Sociais</h6>
        <div className="flex gap-3 ml-4 ">
          <Link>
            <img
              src="/images/face.png"
              alt="facebook image"
              className="transition-all dutarion-300  hover:scale-110  hover:bg-[#3b5998]"
            />
          </Link>
          <Link>
            <img
              src="/images/twitter.png"
              alt="twitter image"
              className="transition-all dutarion-300 transform hover:scale-110   hover:bg-[#1da1f2]"
            />
          </Link>
          <Link>
            <img
              src="/images/insta.png"
              alt="instagram image"
              className="transition-all dutarion-300 transform hover:scale-110 hover:bg-gradient-to-r from-[#fdf497] via-[#fd5949] via-[#d6249f] to-[#285aeb]"
            />
          </Link>
          <Link>
            <img
              src="/images/google.png"
              alt="google image"
              className="transition-all dutarion-300 transforma hover:scale-110   hover:bg-[#db4437]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
//absolute left-32 mt-10
