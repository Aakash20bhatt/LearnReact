export default function StopWatch(){
    const [time,setTime] = useState(0) // time represents time in seconds
    const formatTime = (time)=>{
        const getSeconds = `0${time%60}`.slice(-2);
        const getMinutes = `0${(Math.floor(time/60)%60)}`.slice(-2);
        const getHours = `0${(Math.floor(time/3600))%60}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`
    }
    return(
        <>
            <button>Start Timer</button>
            <button>Stop Timer</button>
            <button>Reset</button>
        </>
    )
}