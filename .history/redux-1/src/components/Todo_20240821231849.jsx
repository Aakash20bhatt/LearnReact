import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSlice from '../redux/todoSlice';

const actions = todoSlice.actions;

export default function Todo(){
    const {value,todoList} = useSelector((store)=>store.todoState)
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        dispatch(action.setValue(e.target.value))
    }

    return(
        <div>
            <div>
                <input type="text" />
                <button>Add task</button>
            </div>
            <div>
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                </ul>
            </div>
        </div>
    )
}