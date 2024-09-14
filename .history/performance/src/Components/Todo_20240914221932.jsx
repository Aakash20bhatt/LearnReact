import React, { useState } from 'react';
import Item from './Item';

export default function Todo(){
    const [list,setList] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
    const [todo, setTodo] = useState('');

    const removeItem = (itemToDelete)=>{
        const filteredList = list.filter((item)=>{
            return item!==itemToDelete;
        })

        setList(filteredList);
    }

    return(
        <div>
            <h1>Todo</h1>
            <div>
                <input value={todo} type="text" onChange={(e)=>setTodo(e.target.value)}/>
            </div>
            {list.map((item)=>{
                return <Item key={index} item={item} removeItem={removeItem}/>
            })}
        </div>
    )
}