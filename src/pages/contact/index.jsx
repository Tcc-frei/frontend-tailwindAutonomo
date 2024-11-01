import "/src/index.css";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MapComponent from "../../components/mapa";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-medium text-white absolute">Contato</h1>
        <img
          src="/images/contactImage.svg"
          alt="imagem Contato-Page"
          className="max-w-full"
        />
      </div>
      <div className="flex flex-col  bg-back-about">
        <div className="w-full py-2  text-span-cinza pl-20">
          {" "}
          Home &gt; Sobre nós
        </div>
        <img
          src="/images/contatoMapaImage.svg"
          alt="imagem contato"
          className="w-full h-auto"
        />
      </div>
      <div className="flex pl-16 py-10 bg-back-about ">
        <div className="flex flex-col w-1/2 gap-10  text-xl  ">
          <h1 className="text-4xl font-medium">Informações de contato</h1>
          <div>
            <p>Com mais de 8 anos de experiência no setor, Elethronos!</p>
          </div>
          <div>
            <p>0012, Ruas das Dores, Brasil</p>
            <p>eletrecto@gmail.com</p>
            <p>+55119999999</p>
          </div>
          <div>
            <MapComponent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
