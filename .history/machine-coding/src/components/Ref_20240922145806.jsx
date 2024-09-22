export default function Ref(){
    
    
    const handleClick = ()=>{
        const inputEle = document.querySelector('input') 
        inputEle.focus()
    }

    return(
        <div>
            <input type="text" />
            <button onClick={handleClick}>Click on me to focus on input</button>
        </div>
    )
}