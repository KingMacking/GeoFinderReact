import useStats from "../../hooks/useStats"
import Modal from "../Modal/Modal"

const Stats = ({showStats, setShowStats}) => {
    const [stats, setStats] = useStats()

    const {timesPlayed, winCount, guessDistribution, currentStreak, maxStreak} = stats

    return (
        <Modal title="Estadisticas" show={showStats} onClose={() => setShowStats(false)}>
            <section className="flex justify-between">
                <article className="flex flex-col gap-2 items-center">
                    <p>Current streak</p>
                    <p>{currentStreak}</p>
                </article>
                <article className="flex flex-col gap-2 items-center">
                    <p>Max streak</p>
                    <p>{maxStreak}</p>
                </article>
                <article className="flex flex-col gap-2 items-center">
                    <p>Win count</p>
                    <p>{winCount}</p>
                </article>
                <article className="flex flex-col gap-2 items-center">
                    <p>Times palyed</p>
                    <p>{timesPlayed}</p>
                </article>
                <article className="flex flex-col gap-2 items-center">
                    <p>% of wins</p>
                    <p>{Math.round(winCount / timesPlayed * 100)}</p>
                </article>
            </section>
            <section>
                {Object.entries(guessDistribution).map(([index, count]) => {
                    return <article key={index}><p>{index}: {count}</p></article>
                })}
            </section>
        </Modal>
    )
}
export default Stats