import {useSelector} from 'react-redux'

export default function Counter(){
    const value = useSelector((store)=>{store.counterSlice})
    console.log(value);
    return (
        <div style={{display:'flex'}}>
            <button>Decrement</button>
            <h1>Count value is : 0</h1>
            <button>Increment</button>
        </div>
    )
}