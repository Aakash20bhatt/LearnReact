import React, { useState } from 'react';

export default function Todo(){
    const [list,setList] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
    const [todo, setTodo] = useState('');

    return(
        <div>
            <h1>Todo</h1>
            <div>
                <input value={todo} type="text" onChange={(e)=>setTodo(e.target.value)}/>
            </div>
            {list.map((item)=>{
                return <li key={item}>{item}</li>
            })}
        </div>
    )
}