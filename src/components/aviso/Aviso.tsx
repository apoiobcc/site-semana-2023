const Aviso = ({titulo} : {titulo: string}) => {
    return (
        <div className="flex">
            <span className="z-10 absolute text-black bg-rosa outline-black border-4 border-black p-4 m-3">{titulo}</span>
            <span className="z-0 relative text-white bg-white border-black border-4 p-4 m-3 left-2 top-2">{titulo}</span>
        </div>
    )
}

export default Aviso;