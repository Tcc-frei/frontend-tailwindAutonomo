import "/src/index.css";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function AbousUs() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-medium text-white absolute">Sobre nós</h1>
        <img
          src="/src/assets/images/aboutUsImage.svg"
          alt="imagem sobre nós-page"
          className="max-w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-between px-24 pb-6 bg-back-about">
        <div className="w-full py-4 text-span-cinza mb-4">
          {" "}
          Home &gt; Sobre nós
        </div>
        <div className="flex gap-20">
          <img
            src="/src/assets/images/imagemSobrenos.svg"
            className=""
            alt="imagem sobre nós"
          />
          <div className="flex flex-col w-1/2  text-xl font-normal px-14">
            <p>
              Eletricista Autônomo com mais de 8 anos de experiência no setor
              Com vasta experiência em serviços de instalação elétrica
              residencial e comercial, ofereço soluções completas e
              personalizadas para atender às necessidades de cada cliente. Desde
              projetos elétricos até manutenção preventiva, estou comprometido
              com a segurança, eficiência e qualidade no serviço prestado.
            </p>
            <p>
              Entre os serviços oferecidos estão:
              <ul className="font-Roboto font-medium list-disc ml-4">
                <li>Instalação e manutenção de sistemas elétricos;</li>
                <li>Atualização de quadros de distribuição;</li>
                <li> Instalação de iluminação interna e externa; </li>
                <li>Automação residencial;</li>
                <li>Diagnóstico e resolução de problemas elétricos.</li>
              </ul>
            </p>
            <p>
              Meu compromisso é entregar um serviço rápido, seguro e com o mais
              alto padrão de qualidade, sempre buscando garantir a satisfação
              total dos clientes. Atuo de forma independente, com flexibilidade
              de horários e foco no atendimento personalizado. Entre em contato
              para mais informações e orçamentos sem compromisso.
            </p>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
