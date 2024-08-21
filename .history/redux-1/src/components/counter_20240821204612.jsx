import {useSelector} from 'react-redux'

export default function Counter(){
    const {count} = useSelector((store)=>store.counterState)
    return (
        <div style={{display:'flex'}}>
            <button>Decrement</button>
            <h1>Count value is : {count}</h1>
            <button>Increment</button>
        </div>
    )
}