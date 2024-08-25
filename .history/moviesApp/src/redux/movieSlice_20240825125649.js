
const movieSlice = createSlice({
    name:'movieSlice',
    initialState:{
        movies:[],
        loading:true,
        error:false
    },
    reducers:{
        setLoading:(state)=>{
            state.loading=true,
            state.error=false,
            state.movies=null
        },
        setError:(state)=>{
            state.error=true,
            state.loading=false,
            state.movies=null
        },
        setMovies:(state,descObj)=>{
            state.movies=descObj.payload;
            state.loading=false,
            state.error=false
        }
    }
})