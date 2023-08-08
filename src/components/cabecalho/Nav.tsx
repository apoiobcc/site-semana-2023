const buttonStyle = {
    margin: '3rem',
    backgroundColor: 'var(--cinza_claro)',
    padding: '1.5rem 2.5rem',
    margin: '1rem'
}

export default function Nav () {
    return (
        <>
            <nav className="Nav hidden lg:flex">
                <ul className="Nav__bar flex items-center gap-5">
                    <li className="Nav__bar-sobre" style={buttonStyle}><a>Sobre</a></li>
                    <li className="Nav__bar-calendario" style={buttonStyle}><a>Calendario</a></li>
                    <li className="Nav__bar-como-chegar" style={buttonStyle}><a>Como Chegar</a></li>
                    <li className="Nav__bar-colaboradores" style={buttonStyle}><a>Colaboradores</a></li>
                </ul>
            </nav>
        </>
    )
}