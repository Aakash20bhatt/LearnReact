import { useEffect, useState } from "react";

export default function User(){

    const[loading, setLoading] = useState(true);
    const[user, setUser] = useState(null);
    const[error, setError] = useState(false);

    useEffect(()=>{
        async function fetchUser() {
            try{
                    const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
                    const data = await resp.json();
                    setUser(data);
            }catch(e){
                setError(true);
            }finally{
                setLoading(false);
            }
        }
    },[])

    if(error){
        return <h1>Error Occured</h1>
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <>
        <h1>
            User:{user?.name}
        </h1>
        </>
    )
}