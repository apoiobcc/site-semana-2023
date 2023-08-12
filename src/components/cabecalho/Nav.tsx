export default function Nav () {
    return (
        <>
            <nav className="Nav">
                <ul className="Nav__bar flex items-center gap-5">
                    <li className="Nav__bar-sobre menu"><a>Sobre</a></li>
                    <li className="Nav__bar-calendario menu"><a>Calendario</a></li>
                    <li className="Nav__bar-como-chegar menu"><a>Como Chegar</a></li>
                    <li className="Nav__bar-colaboradores menu"><a>Colaboradores</a></li>
                </ul>
            </nav>
        </>
    )
}