import paginationSlice from "./paginationSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        paginationState:paginationSlice.reducer
    }
})

export default store;