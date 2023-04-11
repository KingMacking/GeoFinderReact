import { useState } from "react"
import useStats from "../../../hooks/useStats"

const CountrySelection = ({setGuesses, countriesData, guesses, countryToGuess, setGameStatus, gameStatus}) => {
    const [stats, setStats] = useStats()
    const [currentGuess, setCurrentGuess] = useState("")

    const onChange = (e) => {
        setCurrentGuess(e.target.value.name)

        const value = JSON.parse(e.target.value)
        
        if ( value.name === countryToGuess.name){
            setGuesses([...guesses, value])
            setGameStatus("win")
            setStats({
                guessDistribution: {
                    ...stats.guessDistribution,
                    [guesses.length+1]: stats.guessDistribution[guesses.length+1] + 1
                } ,
                winCount: stats.winCount + 1,
                timesPlayed: stats.timesPlayed + 1,
                currentStreak: stats.currentStreak + 1,
                maxStreak: stats.currentStreak + 1 >= stats.maxStreak ? stats.currentStreak + 1 : stats.maxStreak
            })
            e.target.value = ""
        } else {
            setGuesses([...guesses, value])
            if(guesses.length + 1 === 6){
                setGameStatus("lose")
                setStats({
                    ...stats,
                    timesPlayed: stats.timesPlayed + 1,
                    currentStreak: 0
                })
                e.target.value = ""
            }
            
        }
    }

    return (
        <div>
            <select value={currentGuess?.name} disabled={gameStatus !== null ? true : false} onChange={onChange}>
                <option value="" label="Selecciona un país" />
                {
                    countriesData.map(country => {
                        return <option key={country.name} value={JSON.stringify(country)} label={country.name} />
                    })
                }
            </select>
        </div>
    )
}
export default CountrySelection