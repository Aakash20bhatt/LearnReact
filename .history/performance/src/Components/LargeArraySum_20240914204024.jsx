import {useState,useMemo} from 'react'

const generateLargeArray = ()=>{
    const largeArray = [];
    console.log("Generating Array")
    for(let i=0; i<1000000; i++){
        largeArray.push(i);
    }
    return largeArray;
}

const sumArray = (arr)=>{
    console.log("Calculating Sum...");
    return arr.reduce((acc,curr)=>acc+curr,0);
}
export default function LargeArraySum(){
    const [count, setCount] = useState(0);
    const largeArray = useMemo(()=>generateLargeArray(),[]); // Invoke Callback only on mounting
    const sum = useMemo(()=>sumArray(largeArray),[]);
z


    return (
        <>
            <h1>Sum:{sum}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>{count}</p>
        </>
    )
}