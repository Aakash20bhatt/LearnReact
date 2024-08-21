import {useDispatch, useSelector} from 'react-redux'
import counterSlice from '../redux/counterSlice'

const actions = counterSlice.actions;

export default function Counter(){
    const {count} = useSelector((store)=>store.counterState)
    const dispatch = useDispatch();

    const handleIncrement = (()=>{
        dispatch(actions.increment());
    })

    const handleDecrement  = (()=>{
        dispatch(actions.decrement());
    })
    return (
        <div style={{display:'flex'}}>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>Count value is : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}