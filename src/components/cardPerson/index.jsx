import "/src/index.css";


export default function CardPerson(props) {
  return (
    <div className="flex flex-col max-w-72   gap-1 items-start border-2 border-black/15 px-3 py-2">
      <p className="text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere</p>
      <div className="flex items-center gap-4 ">
        <img src={props.imagemPerson} alt="imagem pessoa" />
        <div className="flex flex-col items-start"> 
          <h1 className="text-lg font-semibold">{props.nome}</h1>
          <span className="text-xs">{props.local}</span>
        </div>
      </div>
    </div>
  );
}