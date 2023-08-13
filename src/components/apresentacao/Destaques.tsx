import Card from "./Card";

export default function Destaque () {
    return (
        <div className="flex flex-row justify-evenly items-center">
            <Card style="container-rosa" destaque="Coffee Breaks" icon="coffee_maker"/>
            <Card style="container-amarelo" destaque="Palestras" icon="person"/>
            <Card style="container-azul" destaque="Integração" icon="forum"/>
        </div>
    )
}