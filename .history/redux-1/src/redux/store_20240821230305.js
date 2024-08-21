import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";

// It take the reducer of slice
const store = configureStore({
    reducer:{
        counterState:counterSlice.reducer,
        todoState:todoSlice.reducer
    }
})

export default store;