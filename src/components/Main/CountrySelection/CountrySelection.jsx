import { useState } from "react"
import useStats from "../../../hooks/useStats"

const CountrySelection = ({setGuesses, countriesData, guesses, countryToGuess, setGameStatus, gameStatus}) => {
    const [stats, updateStats] = useStats()
    const [currentGuess, setCurrentGuess] = useState("")

    const onChange = (e) => {
        setCurrentGuess(e.target.value.name)

        const value = JSON.parse(e.target.value)
        
        if ( value.name === countryToGuess.name){
            setGuesses([...guesses, value])
            setGameStatus("win")
            
            e.target.value = ""
        } else {
            setGuesses([...guesses, value])
            if(guesses.length + 1 === 6){
                setGameStatus("lose")
                e.target.value = ""
            }
            
        }
    }

    return (
        <div className="flex justify-center w-full">
            <select className="px-2 py-3 border rounded-lg w-[300px] md:w-96 font-text text-lg dark:bg-black" value={currentGuess?.name} disabled={gameStatus !== null ? true : false} onChange={onChange}>
                <option className="font-text" value="" label="Selecciona un país" />
                {
                    countriesData.map(country => {
                        return <option className="font-text" key={country.name} value={JSON.stringify(country)} label={country.name} />
                    })
                }
            </select>
        </div>
    )
}
export default CountrySelection