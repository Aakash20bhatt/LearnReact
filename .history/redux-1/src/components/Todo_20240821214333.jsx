import React from 'react'

export default function Todo(){
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