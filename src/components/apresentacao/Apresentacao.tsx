import Data from "./Data";
import Sobre from "./Sobre";

export default function () {
    return (
        <div className="Apresentacao__container flex flex-col gap-6 bg-yellow-400 text-black p-4 flex-1 max-w-[1000px]">
            <Data />
            <Sobre />
            <span className="Apresentacao__icon--seta-baixo">Seta-para-baixo-Icone</span>
        </div>
    )
}