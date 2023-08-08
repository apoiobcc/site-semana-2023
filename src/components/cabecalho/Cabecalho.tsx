import Icon from "./Icon";
import Nav from "./Nav";
import Title from "./Title";
import '../../fonts/fonts.css'

export default function Cabecalho () {
    return (
        <header className="w-full h-32 mt-20 px-10 flex items-center justify-between font-sansitaone bg-white text-black">
            <Icon></Icon>
            <Title></Title>
            <Nav></Nav>
        </header>
    );
}