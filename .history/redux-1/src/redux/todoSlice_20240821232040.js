import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todoSlice',
    initialState:{
        todoList:[],
        value:"",
    },
    reducers:{
        setValue:(state,descObj)=>{
            state.value = descObj.payload;
        },
        addTodo:(state)=>{
            state.todoList.push(state.value);
            state.currentTask = ""
        }
    }
})

export default todoSlice;