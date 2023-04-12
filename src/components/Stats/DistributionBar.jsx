const DistributionBar = ({count, winCount}) => {
    const value = Math.round((count/winCount)*100)
    return (
        <div style={{flexBasis: `${value}%`}} className={`flex ${count > 0 && "bg-primary text-white"} h-5 ml-2 py-4 items-center justify-center font-bold rounded-lg text-sm md:text-lg font-text`}>{count > 0 && count}</div>
    )
}
export default DistributionBar