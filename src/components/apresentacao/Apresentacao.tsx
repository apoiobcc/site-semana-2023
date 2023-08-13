import React from "react";
import Data from "./Data";
import Sobre from "./Sobre";
import style from "./Apresentacao.module.css"
import Destaque from "./Destaques";

const Apresentacao = () => {
    return (
        <div>
            <div className="justify-center items-center mx-40 my-10 p-12 container-amarelo">
                <Data/>
                <div>
                    <Sobre/>
                    <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
                </div>
            </div>
            <div>
                <Destaque/>
            </div>
        </div>
    );
}

export default Apresentacao;