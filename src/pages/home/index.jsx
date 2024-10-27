import "/src/index.css";
import Header from "../../components/header";
import CardPerson from "../../components/cardPerson";
import Footer from "../../components/footer";
export default function Home() {
  return (
    <div className="flex flex-col  ">
      <Header />

      <div>
        <img
          src="/src/assets/images/eletricistImg2.svg"
          alt="imagem eletricista"
          className="-z-1"
        />
        <div className="flex flex-col absolute top-80 left-20 text-white font-Roboto gap-5">
          <h1 className="text-5xl font-medium tracking-wide	 ">
            ELétrica & mais
          </h1>
          <p className="font-light text-3xl">
            Um serviço em que você pode confiar
          </p>
          <button className="py-2 px-5 rounded-md w-fit bg-botao hover:bg-botao/60 transition-all duration-300 ">
            Conheça-nos
          </button>
        </div>
      </div>

      <section className="flex flex-col py-8 px-28 items-center justify-center">
        <div className="flex gap-10 items-center">
          <div className="flex flex-col w-1/2 font-Roboto text-black p-10 gap-10">
            <h2 className="text-4xl font-semibold">ELETHRONOS</h2>
            <p className="text-2xl font-normal text-left leading-9">
              presta serviços a mais de 15 anos, sendo firmado como um dos
              serviços mais sólidos do mercado,atuando no mercado com manutenção
              residencial, manutenção de aparelhos eletronicos.
            </p>
            <button className="py-2 px-8  w-fit bg-botao hover:bg-botao/60 transition-all  duration-300 text-white">
              Ver mais...
            </button>
          </div>
          <div className="flex items-center p-8">
            <img
              src="/src/assets/images/eletricist.svg"
              alt="eletricista"
              className="w-full p-2"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center   ">
        <h3 className="text-4xl font-semibold font-Roboto ">
          O que nós oferecemos
        </h3>
        <p className="text-xl font-normal font-Roboto mt-4">
          Oferecemos uma gama abrangente de serviços econômicos para
          propriedades residenciais e comerciais
        </p>

        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center flex-col p-8 gap-4">
            <img
              src="/src/assets/images/eletricImg1.svg"
              alt="imagem placa eletrica"
            />
            <h2 className="text-3xl font-medium ">Preventiva</h2>
            <p className="text-lg">
              <b>inspeção </b>feita de tempos em tempos nas instalações
              elétricas para antecipar problemas graves, detectando-os quando
              ainda estão em estágios iniciais.
            </p>
          </div>

          <div className="flex items-center flex-col p-8 gap-4">
            <img
              src="/src/assets/images/eletricImgLampada.svg"
              alt="imagem lampada cinza"
            />
            <h2 className="text-3xl font-medium ">Instalação elétrica</h2>
            <p className="text-lg">
              <b>Infraestrutura,</b>
              <b> Cabeamento</b>,<b> Quadro elétrico principal</b>;{" "}
              <b>Instalações Elétricas Comerciais:</b> destinadas a
              estabelecimentos comerciais, como lojas, escritórios, etc.
            </p>
          </div>
          <div className="flex items-center flex-col p-8 gap-4">
            <img
              src="/src/assets/images/eletricImgTomada.svg"
              alt="imagem tomada cinza"
            />
            <h2 className="text-2xl font-medium ">Reparos & Manutenção</h2>
            <p className="text-lg">
              <b>Reparo e manutenção elétrica </b>envolve o diagnóstico,
              correção de falhas e a manutenção preventiva de sistemas
              elétricos.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center bg-back-cinza mt-10  gap-4 py-6 ">
        <h4 className="text-4xl font-medium">Projeto Recentes</h4>
        <div className="flex justify-between">
          <img
            src="/src/assets/images/projeto1.svg"
            alt="imagem projeto 1"
            className=" p-8 h-80 ml-10"
          />
          <img
            src="/src/assets/images/projeto2.svg"
            alt="imagem projeto 2"
            className=" p-8 h-80 "
          />
          <img
            src="/src/assets/images/projeto3.svg"
            alt="imagem projeto 3"
            className=" p-8 h-80 mr-10"
          />
        </div>
      </section>
      <section className="flex flex-col text-center my-6">
        <h1 className="text-4xl font-medium mt-4">Feedback</h1>
        <div className="flex py-14 px-20 gap-20  justify-center">
          <CardPerson 
          nome="João Silva"
          local="São Paulo, SP"
          imagemPerson="/src/assets/images/person1.svg"
          />
           <CardPerson 
          nome="Leonardo da Silva"
          local="São Paulo, SP"
          imagemPerson="/src/assets/images/person2.svg"
          />
           <CardPerson 
          nome="Maria Pinto"
          local="São Paulo, SP"
          imagemPerson="/src/assets/images/person3.svg"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
