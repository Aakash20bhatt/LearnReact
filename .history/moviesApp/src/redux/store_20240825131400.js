import movieSlice from "./movieSlice";
import paginationSlice from "./paginationSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        paginationState:paginationSlice.reducer,
        moviesState:movieSlice.reducer
    }
})

export default store;