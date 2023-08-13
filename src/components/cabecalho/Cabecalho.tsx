import Icon from "./Icon";
import Nav from "./Nav";
import Title from "./Title";
import '../../fonts/fonts.css'

export default function Cabecalho () {
    return (
        <header className="w-full h-10 md:h-20 lg:h-32 mt-10 lg:mt-7 px-10 flex items-center justify-around lg:justify-between font-sansitaone bg-white text-black">
            <Icon></Icon>
            <Title></Title>
            <Nav></Nav>
        </header>
    );
}