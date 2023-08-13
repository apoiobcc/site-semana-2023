const Aviso = ({titulo}) => {
    return (
        <div className="w-full my-20 ml-40">
            <span className="titulo-rosa">{titulo}</span>
            <span className="container-azul" id="dev">Em desenvolvimento</span>
        </div>
    )
}

export default Aviso;