import {useSelector} from 'react-redux'

export default function Counter(){
    const {count} = useSelector((store)=>{store.counterState})
    console.log(value);
    return (
        <div style={{display:'flex'}}>
            <button>Decrement</button>
            <h1>Count value is : 0</h1>
            <button>Increment</button>
        </div>
    )
}