import { Icon } from "@iconify/react"

const GameEndInfo = ({gameStatus, countryToGuess, resetGame}) => {
    return (
        <footer className={`mt-4 ${gameStatus === null && "hidden"}`}>
            <section className="mb-2">
                <header className="flex flex-col items-center">
                    <h3 className="text-2xl font-title">{gameStatus === "lose" ? "¡Se te acabaron los intentos!" : "¡Correcto!"}</h3>
                    <p className="text-lg font-text">El pais oculto era</p>
                    <p className="w-full max-w-[300px] md:max-w-[24rem] py-3 my-2 text-5xl text-center border rounded-lg font-text overflow-ellipsis">{countryToGuess?.name}</p>
                </header>
                <article className="my-6">
                    <h4 className="mb-2 text-2xl font-semibold underline underline-offset-2 font-title">Información:</h4>
                    <p className="flex items-center gap-2 text-lg font-text"><Icon className="text-2xl" icon="bx:world" inline={true} /><span className="font-medium">Continente: </span>{countryToGuess.region}</p>
                    <p className="flex items-center gap-2 text-lg font-text"><Icon className="text-2xl" icon="mdi:surface-area" inline={true} /><span className="font-medium">Área: </span>{countryToGuess.area} km²</p>
                    <p className="flex items-center gap-2 text-lg font-text"><Icon className="text-2xl" icon="material-symbols:person-rounded" inline={true} /><span className="font-medium">Población: </span>{countryToGuess.population} habitantes</p>
                </article>
            </section>
            <button className={`${gameStatus === null && "hidden"} bg-primary text-white w-full py-4 rounded-lg text-3xl font-medium font-text hover:bg-error hover:scale-105 transition-all ease-in-out`} onClick={() => resetGame()}>{gameStatus === "lose" ? "REINTENTAR" : "VOLVER A JUGAR"}</button>
        </footer>
    )
}
export default GameEndInfo