import Colaboradores from "../Colaboradores/Colaboradores";
import Marca from "./Marca";
import Aviso from "@/components/aviso/Aviso";

export default function Apoio () {
    const dirColaboradores = '/images/colaboradores';
    const imagens = ["usp.png", "ime.png", "apoio.png"];
    const elementosImagem = imagens.map((item, index) => (
        <img className="m-3"
        key={index}
        src={`${dirColaboradores}/${item}`} 
        />
    ));
    return (
        <div className="Apoio__container bg-white w-full flex justify-center text-black flex-col">
            <div className="flex justify-center m-2"><Aviso titulo="Colaboradores"/></div>
            <div className="flex justify-center">{elementosImagem}</div>
        </div>
    )
}