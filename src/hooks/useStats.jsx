import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const useStats = () => {
    const [stats, setStats] = useLocalStorage("stats", {})
    const userStats = {
        guessDistribution: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
        },
        currentStreak : 0,
        maxStreak : 0,
        winCount : 0,
        timesPlayed : 0,
    }
    useEffect(() => {
        if(Object.keys(stats).length === 0){
            setStats(userStats)
        }
    }, [])

    const updateStats = (newStats) => {
        setStats(newStats)
    }

    return [stats, updateStats]
}
export default useStats