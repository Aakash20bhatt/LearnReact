import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
import userSlice from "./userSlice";

// It take the reducer of slice
const store = configureStore({
    reducer:{
        counterState:counterSlice.reducer,
        todoState:todoSlice.reducer,
        userSlice:userSlice.reducer
    }
})

export default store;