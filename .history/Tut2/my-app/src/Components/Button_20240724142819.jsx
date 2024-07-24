export default function Button(){
    function handleClick(){
        console.log("Button Clicked")
    }
    return(
        <button onClick={handleClick}
        >Click Me and Check Console</button>
    )
}