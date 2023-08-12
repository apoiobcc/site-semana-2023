import Icon from "./Icon";
import Nav from "./Nav";
import Title from "./Title";
import '../../fonts/fonts.css'

export default function Cabecalho () {
    return (
        <header className="w-full py-5 px-10 flex items-center justify-between font-sansitaone bg-white">
            <Icon></Icon>
            <Title></Title>
            <Nav></Nav>
        </header>
    );
}