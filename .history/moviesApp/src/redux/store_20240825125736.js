import movieSlice from "./movieSlice";
import paginationSlice from "./paginationSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        paginationState:paginationSlice.reducer,
        movieState:movieSlice.reducer
    }
})

export default store;