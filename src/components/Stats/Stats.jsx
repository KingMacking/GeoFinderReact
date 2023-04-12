import Modal from "../Modal/Modal"
import DistributionBar from "./DistributionBar"
import useStats from "../../hooks/useStats"

const Stats = ({showStats, setShowStats, stats}) => {
    const {timesPlayed, winCount, guessDistribution, currentStreak, maxStreak} = stats


    return (
        <Modal title="Estadísticas" show={showStats} onClose={() => setShowStats(false)}>
            <section className="flex flex-wrap justify-between pt-2 pb-4 border-b gap-y-2 border-primary">
                <article className="flex flex-col items-center gap-2">
                    <h4 className="font-semibold md:text-lg font-title">Racha</h4>
                    <p className="flex items-center justify-center w-8 h-8 text-sm text-white bg-black rounded-full font-text md:w-10 md:h-10 dark:bg-white dark:text-black md:text-base">{currentStreak}</p>
                </article>
                <article className="flex flex-col items-center gap-2">
                    <h4 className="font-semibold md:text-lg font-title">Racha maxima</h4>
                    <p className="flex items-center justify-center w-8 h-8 text-sm text-white bg-black rounded-full font-text md:w-10 md:h-10 dark:bg-white dark:text-black md:text-base">{maxStreak}</p>
                </article>
                <article className="flex flex-col items-center gap-2">
                    <h4 className="font-semibold md:text-lg font-title">Ganadas</h4>
                    <p className="flex items-center justify-center w-8 h-8 text-sm text-white bg-black rounded-full font-text md:w-10 md:h-10 dark:bg-white dark:text-black md:text-base">{winCount}</p>
                </article>
                <article className="flex flex-col items-center gap-2">
                    <h4 className="font-semibold md:text-lg font-title">Veces jugadas</h4>
                    <p className="flex items-center justify-center w-8 h-8 text-sm text-white bg-black rounded-full font-text md:w-10 md:h-10 dark:bg-white dark:text-black md:text-base">{timesPlayed}</p>
                </article>
                <article className="flex flex-col items-center gap-2">
                    <h4 className="font-semibold md:text-lg font-title">% de ganadas</h4>
                    <p className="flex items-center justify-center w-8 h-8 text-sm text-white bg-black rounded-full font-text md:w-10 md:h-10 dark:bg-white dark:text-black md:text-base">{Math.round(winCount / timesPlayed * 100)}</p>
                </article>
            </section>
            <section className="py-2">
                <h3 className="text-lg font-medium text-center underline underline-offset-2 md:text-2xl font-title">Distribución de aciertos</h3>
                {Object.entries(guessDistribution || []).map(([index, count]) => {
                    return <article className="flex items-center w-full my-2" key={index}><span className="text-sm font-medium md:text-lg font-text">{index}</span><DistributionBar count={count} winCount={winCount} /></article>
                })}
            </section>
        </Modal>
    )
}
export default Stats