import Icon from "./Icon";
import Nav from "./Nav";
import Title from "./Title";


export default function Cabecalho () {
    return (
        <header className="w-full py-5 px-10 flex items-center justify-between">
            <Icon></Icon>
            <Title></Title>
            <Nav></Nav>
        </header>
    );
}