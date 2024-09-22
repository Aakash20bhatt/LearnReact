import {useState, useCallback } from 'react'

export default function useVisible(initiallyVisiblilty = false){
    const[isVisible, setVisible] = useState(true);
    const show = useCallback(()=>{
        setVisible(true);
    },[]);

    const toggle = useCallback(()=>{
        setVisible((prevVisible)=>prevVisible+1);
    },[])

    const hide = useCallback(()=>{
        setVisible(false);
    },[])

    return {isVisible,toggle,hide,show}
}