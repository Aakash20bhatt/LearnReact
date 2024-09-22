import {useRef} from 'react'

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

    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = ()=>{
        console.log(inputRef)
    }

    return(
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Click on me to focus on input</button>
        </div>
    )
}