import { useEffect, useState } from "react"
import React from "react";

export default function WithLoading(WrappedComponent){
    return function HOC(){
        const [loading,setLoading]=useState(true);
        useEffect(()=>{
            setTimeout(()=>{
                setLoading(false);
            },2000)
        },[])
        if(loading){
            return <h1>Loading...</h1>
        }
    
        return <WrappedComponent/>
    }
}