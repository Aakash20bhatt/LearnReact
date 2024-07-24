function Counter(){
    let count = 0;
    const increment=()=>{
        console.log(count++)
    }

    const decrement=()=>{
        if(count==0){
            return
        }
        console.log(count--)
    }
    return (
        <>
        <h2>Counter:{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter;