import { useState } from "react"

export default function Form(){
    const [name, setName] = useState('')
    const [age, setAge] = useState(18)
    const [email, setEmail] = useState('')

    return (
        <>
        <label htmlFor="">
            Name:
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        </label>
        <label htmlFor="">
            Age:
            <input type="number" onChange={(e)=>setAge(e.target.value)} value={age}/>
        </label>
        <label htmlFor="">
            Email:
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </label>
        </>
    )
}