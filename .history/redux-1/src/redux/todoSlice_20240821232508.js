import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todoSlice',
    initialState:{
        todoList:[],
        currentTask:"",
    },
    reducers:{
        setValue:(state,descObj)=>{
            state.currentTask = descObj.payload;
        },
        addTodo:(state)=>{
            state.todoList.push(state.currentTask);
            state.currentTask = ""
        }
    }
})

export default todoSlice;