import { Icon } from "@iconify/react";
import { getDistance, getCompassDirection } from "geolib"

const Guesses = ({countryToGuess, guesses}) => {
    const DIRECTION_ARROWS = {
        N: "-rotate-90",
        NNE: "-rotate-45",
        NE: "-rotate-45",
        ENE: "-rotate-45",
        E: "rotate-0",
        ESE: "rotate-45",
        SE: "rotate-45",
        SSE: "rotate-45",
        S: "rotate-90",
        SSW: "rotate-[135deg]",
        SW: "rotate-[135deg]",
        WSW: "rotate-[135deg]",
        W: "-rotate-180",
        WNW: "-rotate-[135deg]",
        NW: "-rotate-[135deg]",
        NNW: "-rotate-[135deg]",
    };

    const dist = (guess, countryToGuess) => {
        return Math.round(getDistance(
            {latitude: guess.latitude, longitude: guess.longitude},
            {latitude: countryToGuess.latitude, longitude: countryToGuess.longitude}
        )/1000 )
    }

    const dir = (guess, countryToGuess) => {
        return (
            dist(guess, countryToGuess) === 0 ? "🎉" :
            DIRECTION_ARROWS[getCompassDirection(
                {latitude: guess.latitude, longitude: guess.longitude},
                {latitude: countryToGuess.latitude, longitude: countryToGuess.longitude}
            )]
        )
    }

    return (
        <>
            {
                guesses.length > 0 && guesses.map((guess, index) => {
                    const distance = dist(guess, countryToGuess)
                    const direction = dir(guess, countryToGuess)
                    return (
                        <div key={index} className="flex gap-4">
                            <p>{guess.name}</p>
                            <p className={`${guess.region === countryToGuess.region ? "bg-success" : "bg-error"} flex items-center px-2`}>
                                <Icon icon="bx:world" inline={true} />
                            </p>
                            <p>{distance} km</p>
                            <p className="flex items-center">
                                {
                                    direction === "🎉" ? "🎉" :
                                    <Icon className={`${direction} text-3xl`} icon="ic:round-arrow-circle-right" />
                                }
                            </p>
                            <p className="flex items-center">
                                {
                                    distance === 0 ? "🎉" : <span className="flex items-center"><Icon icon={`${guess.area > countryToGuess.area ? "material-symbols:keyboard-arrow-down-rounded" : "material-symbols:keyboard-arrow-up-rounded"}`} />km²</span>
                                }
                            </p>
                            <p className="flex items-center">
                                {
                                    distance === 0 ? "🎉" : <Icon icon={`${guess.population > countryToGuess.population ? "material-symbols:person-remove-rounded" : "material-symbols:person-add-rounded"}`} />
                                }
                            </p>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Guesses