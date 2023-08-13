const TextShadow = {
    textShadow: 'black -2px 2px 0'
}

export default function Title() {
    return (
        <>
        <div style={TextShadow}>
            <div>
                <span className="text-amarelo text-2xl md:text-6xl lg:text-8xl">Semana</span>
                <span className="text-rosa text-lg md:text-4xl lg:text-6xl">  XIV</span>
            </div>
            <span className="text-laranja text-center text-xl md:text-5xl lg:text-7xl">da computação</span>
        </div>
        </>
    );
} 