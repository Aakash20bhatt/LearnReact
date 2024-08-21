import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// It take the reducer of slice
const store = configureStore({
    reducer:{
        counterState:counterSlice.reducer
    }
})

export default store;