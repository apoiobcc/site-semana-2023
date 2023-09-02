const Card = ({style, destaque, icon} : {style: string, destaque: string, icon: string}) => {
    return (
        <div className={`${style} p-10 pb-20 pt-20 flex flex-col justify-center items-center`}>
            <span className="material-symbols-outlined" id="icon-coffee">{icon}</span>
            <div className="text-3xl font-sansitaone text-center">{destaque}</div>
        </div>
    )
}

export default Card;