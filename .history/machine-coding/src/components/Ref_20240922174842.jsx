import {useEffect, useRef, useState} from 'react'

export default function Ref(){
    // This code is fine but it has  problems
    // 1. Whenever someone click on it, each time we are selected the input.
    // 2. In React , we do not interact with dom, you just gave the functionally.
    // const handleClick = ()=>{
    //     const inputEle = document.querySelector('input') 
    //     inputEle.focus()
    // }

    // Issues: First this code execute then return wali statement re-render
    // Sol - so we use UseRef, when we want the reference of the DOM element.
    // const inputEle = document.querySelector('input')

    // const handleClick = ()=>{ 
    //     inputEle.focus()
    // }

    const [seconds, setSeconds] = useState(0);
    const inputRef = useRef(null);
    const intervalRef = useRef(null);
    const handleClick = ()=>{
        inputRef.current.focus();
    }

    const handlePause = ()=>{
        clearInterval(intervalRef.current)
    }

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setSeconds((prevSeconds)=>prevSeconds+1)
        },1000)

        return  ()=> {
            clearInterval(intervalRef.current)
        }
    })
    return(
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Click on me to focus on input</button>
            <div>
                <h1>Timer</h1>
                <h2>{seconds}</h2>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    )
}