import paginationSlice from "./paginationSlice";

const store = configureStore({
    reducer:{
        paginationState:paginationSlice.reducer
    }
})

export default store;