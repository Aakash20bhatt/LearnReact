import React from 'react'

function Item({item,removeItem}){
    return <li key={item}>{item}
        <button onClick={()=>removeItem(item)}>Remove</button>
    </li>
}

export default React.memo(Item);