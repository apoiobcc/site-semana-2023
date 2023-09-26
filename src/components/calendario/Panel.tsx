"use client"

import Info from "./Info";
import {useEffect} from 'react';

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
        <div>
            <h1>{item.Evento}</h1>
            <h2>{item.Organizador}</h2>
            <p>{item.Inicio}</p>
            <p>{item.Fim}</p>
        </div>
    ));
    useEffect(() => {
        console.log(props.conteudo)
    }, [])
    return (
        <div className="Panel__container">
            <span className="Panel__title--data"><strong className="Panel__strong--data">{dia}/10</strong> - {diaSemana}</span>
            <div>{content}</div>
        </div>
    )
}