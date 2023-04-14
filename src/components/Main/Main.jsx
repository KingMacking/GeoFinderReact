import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import gfIcon from '../../assets/gf-icon.svg'
import Flag from "./Flag/Flag"
import { Pulsar } from "@uiball/loaders"
import Guesses from "./Guesses/Guesses"
import CountrySelection from "./CountrySelection/CountrySelection"
import Confetti from "react-confetti"
import { Icon } from "@iconify/react"
import Stats from "../Stats/Stats"
import HowToPlay from "../HowToPlay/HowToPlay"
import GameEndInfo from "./GameEndInfo/GameEndInfo"
import useColorMode from "../../hooks/useColorMode"
import useStats from "../../hooks/useStats"
import useWindowSize from "../../hooks/useWindowSize"

const Main = () => {
    const [colorMode, setColorMode] = useColorMode()
    const {width, height} = useWindowSize()
    const [stats, updateStats] = useStats()

    const [countryToGuess, setCountryToGuess] = useState(null)
    const [guesses, setGuesses] = useState([])
    const [gameStatus, setGameStatus] = useState(null)
    const [currentGuess, setCurrentGuess] = useState(null)
    
    const [showStats, setShowStats] = useState(false)
    const [showHelp, setShowHelp] = useState(false)

    useEffect(() => {
        if(gameStatus === "win"){
            updateStats({
                guessDistribution: {
                    ...stats.guessDistribution,
                    [guesses.length]: stats.guessDistribution[guesses.length] + 1
                } ,
                winCount: stats.winCount + 1,
                timesPlayed: stats.timesPlayed + 1,
                currentStreak: stats.currentStreak + 1,
                maxStreak: stats.currentStreak + 1 >= stats.maxStreak ? stats.currentStreak + 1 : stats.maxStreak
            })
        } else if (gameStatus === "lose"){
            updateStats({
                ...stats,
                timesPlayed: stats.timesPlayed + 1,
                currentStreak: 0
            })
        }
    },[gameStatus])

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
        setCurrentGuess(null)
        console.log(stats);
    }

    return (
        <main className="flex flex-col items-center h-full px-2 py-8 md:px-6 md:py-12">
            { 
                isLoading ? <Pulsar size={40} speed={1.75} color="black" /> :
                <section>
                    <header className="flex items-center justify-center gap-2 mb-14">
                        <img src={gfIcon} className="w-12 md:w-14" />
                        <h1 className="text-5xl text-black md:text-6xl dark:text-white font-title">
                            <span className="text-primary">G</span>eo<span className="text-primary">F</span>inder
                        </h1>
                    </header>
                    <main>
                        <div className="flex justify-between w-full">
                            <button onClick={() => setShowStats(true)}>
                                <Icon className="text-4xl" icon="mdi:graph-box" />
                            </button>
                            <button onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")} className="flex items-center" ><Icon className="p-2 text-4xl border rounded-full border-greyLight dark:text-white text-blackDarker" icon={colorMode === "dark" ? "ph:moon-fill" : "ph:sun-fill"}/></button>
                            <button onClick={() => setShowHelp(true)}>
                                <Icon className="text-4xl" icon="mdi:question-mark-box" />
                            </button>
                        </div>
                        <Flag showFlag={gameStatus !== null} country={countryToGuess} />
                        <CountrySelection currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} setGuesses={setGuesses} guesses={guesses} countriesData={countriesData} countryToGuess={countryToGuess} setGameStatus={setGameStatus} gameStatus={gameStatus} />
                        <Guesses countryToGuess={countryToGuess} guesses={guesses} />
                    </main>
                    <GameEndInfo gameStatus={gameStatus} resetGame={resetGame} countryToGuess={countryToGuess} />
                </section>
            }
            {gameStatus === "win" && <Confetti width={width} height={height} />}
            <Stats stats={stats} showStats={showStats} setShowStats={setShowStats} />
            <HowToPlay showHelp={showHelp} setShowHelp={setShowHelp} />
        </main>
    )
}
export default Main