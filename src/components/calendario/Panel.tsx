"use client"

import Info from "./Info";
import {useEffect, useState} from 'react';

export default function Panel(props) {
    const dia = 23+props.dia; let diaSemana;
    switch(dia){
        case 23: diaSemana = "segunda"; break;
        case 24: diaSemana = "terça"; break;
        case 25: diaSemana = "quarta"; break;
        case 26: diaSemana = "quinta"; break;
        case 27: diaSemana = "sexta"; break;
    }
    const content = props.conteudo.map((item) => (
        <div className="m-5 bg-gray-200 border-2 border-black">
            <div className="m-5">
                <div className="bg-amarelo border-2 border-black"><h3 className="m-3">Das {item.Inicio} às {item.Fim}</h3></div>
                <div className="ml-5">
                    <h1 className="text-4xl">{item.Evento}</h1>
                    <h2 className="text-2xl">{item.Organizador}</h2>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="Panel__container m-6 text-black border-black border-2 bg-white">
            <button className="Panel__title--data bg-verde p-5 w-full flex justify-start" onClick={() => props.handleClick(props.dia)}>
                <strong className="Panel__strong--data">{dia}/10</strong> - {diaSemana}
            </button>
            <div>{props.dia == props.visPan && content}</div>
        </div>
    )
}