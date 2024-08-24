import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userState",
    initialState:{
        user:null,
        loading:true,
        error:false
    },
    reducers:{
        setError:(state)=>{
            state.loading=false,
            state.error=true
        },
        setLoading:(state)=>{
            state.loading=true
        },
        setUser:(state,descObj)=>{
            state.loading=false,
            state.user=descObj.payload
        }
    }
})

export default userSlice;
