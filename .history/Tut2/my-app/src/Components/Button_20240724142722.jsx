export default function Button(){
    function cb(){
        console.log("Button Clicked")
    }
    return(
        <button onClick={cb}
        >Click Me and Check Console</button>
    )
}