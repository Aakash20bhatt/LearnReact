import React from 'react'
import { useSelector } from 'react-redux'

export default function Todo(){
    const todo = useSelector((store)=>store.todoState)
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