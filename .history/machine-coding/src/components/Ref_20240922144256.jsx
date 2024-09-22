export default function Ref(){
    
    const inputEle = document.querySelector('input')
    const handleClick = ()=>{
        inputEle.focus()
    }

    return(
        <div>
            <input type="text" />
            <button onClick={handleClick}>Click on me to focus on input</button>
        </div>
    )
}