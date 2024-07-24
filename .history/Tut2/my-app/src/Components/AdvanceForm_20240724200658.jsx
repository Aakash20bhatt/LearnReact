import { useState } from "react"

export default function AdvanceForm(){
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        age:''
    })

    function handleChange(e){
        const {name,value} = e.target;
        const copyFormData = {...formData};
        copyFormData[name] = value;
        setFormData(copyFormData);
    }
    return(
        <>
        <h1>Advance Form</h1>
            <label htmlFor="">Name
                <input type="text"  onChange={handleChange} name="name" value={formData.name}/>
            </label>
            <label htmlFor="">Age
                <input type="number"  onChange={handleChange} name="age" value={formData.age}/>
            </label>
            <label htmlFor="">Password
                <input type="password"  onChange={handleChange} name="password" value={formData.password}/>
            </label>
            <label htmlFor="">Email
                <input type="email"  onChange={handleChange} name="email" value={formData.email}/>
            </label>
        </>
    )
}