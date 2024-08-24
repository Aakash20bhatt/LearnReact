import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import userMiddleWare from "../redux/fetchUserThunk";

export default function User(){
    const {user,loading,error} = useSelector((store)=>store.userSlice);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(userMiddleWare());
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