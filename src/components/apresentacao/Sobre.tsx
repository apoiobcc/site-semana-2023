export default function () {
    return (
        <div className="Sobre__container flex flex-col bg-white border border-black">
            <div className="bg-orange-600 h-8 border-b border-black"></div>
            <div className="flex flex-col px-10 py-3 gap-3">
                <div className="Sobre__titulo bg-pink-400 px-5 py-1 border border-black w-[40%] text-[12pt]">
                    SOBRE A SEMANA
                </div>
                <div className="Sobre__texto mb-20">
                    A semana da computação é uma semana de palestras que aborda diversos temas relacionados às áreas da computação. O evento é aberto a todo público e qualquer interessado pode assistir às palestras.
                </div>
            </div>
        </div>
    )
}