import React from "react";
import Data from "./Data";
import Sobre from "./Sobre";
import Destaque from "./Destaques";

const Apresentacao = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center my-10 p-12 container-amarelo">
                <div>
                    <Sobre/>
                    <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
                </div>
                <Data/>
            </div>
            <div>
                <Destaque/>
            </div>
        </div>
    );
}

export default Apresentacao;