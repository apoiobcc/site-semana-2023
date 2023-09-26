'use client'

import Accordion from "./Accordion";
import axios from "axios";
import Aviso from '@/components/aviso/Aviso';
import { useEffect,useState } from "react";

export default function Calendario () {
    let data = [[], [], [], [], []];
    const [cronograma, setCronograma] = useState(data);
    const fetchEventos = () => {
        axios.get("https://sheet.best/api/sheets/83242efa-8c9e-4f07-87be-9f8daa6274e6")
            .then(response => {
                response.data.forEach(element => {
                    switch(element.Dia){
                        case "23": data[0].push(element); break;
                        case "24": data[1].push(element); break;
                        case "25": data[2].push(element); break;
                        case "26": data[3].push(element); break;
                        case "27": data[4].push(element); break;
                    }
                });
            })
            setCronograma(data);
        }
    useEffect(() => {
        fetchEventos();
    }, [])
    return (
        <div className="Calendario__container h-full w-full bg-yellow-300 m-5">
            <Aviso titulo="Calendário"/>
            <Accordion cronograma={cronograma}/>
        </div>
    )
}