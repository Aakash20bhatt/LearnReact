import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
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
        }
    }
})

export default todoSlice;