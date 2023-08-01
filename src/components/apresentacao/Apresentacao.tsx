import Data from "./Data";
import Sobre from "./Sobre";

export default function () {
    return (
        <div className="Apresentacao__container">
            <Data></Data>
            <Sobre></Sobre>
            <span className="Apresentacao__icon--seta-baixo">Seta-para-baixo-Icone</span>
        </div>
    )
}