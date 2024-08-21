import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
    name:'todoSlice',
    initialState:{
        todoList:[],
        value:"",
    },
    reducers:{
        setValue:()=>{
            console.log("I am set value");  
        }
    }
})

export default todoSlice;