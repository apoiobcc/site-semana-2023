import React from "react";
import Data from "./Data";
import Sobre from "./Sobre";

const Apresentacao: React.FC = () => {
    return (
        <div className="Apresentacao__container">
            <Data/>
            <Sobre/>
            <span className="Apresentacao__icon--seta-baixo">Seta-para-baixo-Icone</span>
        </div>
    );
}

export default Apresentacao;