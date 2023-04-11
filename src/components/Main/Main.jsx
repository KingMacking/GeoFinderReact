import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import gfIcon from '../../assets/gf-icon.svg'
import Flag from "./Flag/Flag"
import { Pulsar } from "@uiball/loaders"
import Guesses from "./Guesses/Guesses"
import CountrySelection from "./CountrySelection/CountrySelection"
import Confetti from "react-confetti"
import { Icon } from "@iconify/react"
import Stats from "../Stats/Stats"
import HowToPlay from "../HowToPlay/HowToPlay"

const Main = () => {
    const [countryToGuess, setCountryToGuess] = useState(null)
    const [guesses, setGuesses] = useState([])
    const [gameStatus, setGameStatus] = useState(null)
    const [showStats, setShowStats] = useState(false)
    const [showHelp, setShowHelp] = useState(true)

    const {data: countriesData, isLoading} = useQuery(["countries"], async () => {
        return await fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => data.map(country => country = {
            name: country.name.common,
            latitude: country.latlng[0],
            longitude: country.latlng[1],
            area: country.area,
            population: country.population,
            region: country.region,
            flag: country.flags.png,
            flagAlt: country.flags.alt,
        }).sort((a,b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase())))
        .then(countries => { 
            setCountryToGuess(countries[Math.floor((Math.random()*countries.length))])
            return countries
        })
    })

    const resetGame = () => {
        setCountryToGuess(countriesData[Math.floor((Math.random()*countriesData.length))])
        setGuesses([])
        setGameStatus(null)
    }

    return (
        <main className="flex flex-col items-center md:px-6 md:py-12">
            { 
                isLoading ? <Pulsar size={40} speed={1.75} color="black" /> :
                <section>
                    <header className="flex gap-2 items-center mb-6">
                        <img src={gfIcon} className="w-12 md:w-16" />
                        <h1 className="text-5xl md:text-6xl text-black dark:text-white">
                            <span className="text-primary">G</span>eo<span className="text-primary">F</span>inder
                        </h1>
                    </header>
                    <main>
                        <div className="w-full flex justify-between">
                            <button onClick={() => setShowStats(true)}>
                                <Icon className="text-2xl" icon="mdi:graph-box" />
                            </button>
                            <button onClick={() => setShowHelp(true)}>
                                <Icon className="text-2xl" icon="mdi:question-mark-box" />
                            </button>
                        </div>
                        <Flag showFlag={gameStatus !== null} country={countryToGuess} />
                        <CountrySelection setGuesses={setGuesses} guesses={guesses} countriesData={countriesData} countryToGuess={countryToGuess} setGameStatus={setGameStatus} gameStatus={gameStatus} />
                        <Guesses countryToGuess={countryToGuess} guesses={guesses} />
                        <p>{gameStatus === "win" && <Confetti />}</p>
                        <p>{gameStatus === "lose" && "Lo siento, has perdido"}</p>
                        <button className={`${gameStatus === null && "hidden"}`} onClick={() => resetGame()}>Replay</button>
                    </main>
                </section>
            }
            <Stats showStats={showStats} setShowStats={setShowStats} />
            <HowToPlay showHelp={showHelp} setShowHelp={setShowHelp} />
        </main>
    )
}
export default Main