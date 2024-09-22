import { useState } from "react";

export default function StopWatch(){
    const [time,setTime] = useState(0) // time represents time in seconds

    const startTimer = ()=>{
        setInterval(()=>{
            setTime((prevTime)=>prevTime+1)
        },1000)
    }
    const formatTime = (time)=>{
        const getSeconds = `0${time%60}`.slice(-2);
        const getMinutes = `0${(Math.floor(time/60)%60)}`.slice(-2);
        const getHours = `0${(Math.floor(time/3600))%60}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`
    }
    return(
        <>
            <h1>{formatTime(time)}</h1>
            <button onClick={startTimer}>Start Timer</button>
            <button>Stop Timer</button>
            <button>Reset</button>
        </>
    )
}