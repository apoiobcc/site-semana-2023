import Image from "next/image";
import Carrossel from "./Carrossel";

const Sobre = () => {
    const images = [
        {
            url : "https://images.unsplash.com/photo-1691539706978-3cb89d88915f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzY1Nzc5NA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            url : "https://plus.unsplash.com/premium_photo-1691852519415-0df4c22e49e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzY1NzgzNQ&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            url : "https://images.unsplash.com/photo-1692481130055-5508b8ba260d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzY1Nzg1MQ&ixlib=rb-4.0.3&q=80&w=1080"
        },
    ]

    return (
        <div className="text-3xl font-sansitaone janela-branca">
            <div className="titulo-rosa">
                SOBRE A SEMANA
            </div>
            <div className="border-black border-[0.4rem]">
                <Carrossel images={images}/>
            </div>

            <div className="my-8">A semana da computação é uma semana de palestras que aborda diversos temas relacionados às áreas da computação. O evento é aberto a todo público e qualquer interessado pode assistir às palestras.</div>
        </div>
    )
}

export default Sobre;