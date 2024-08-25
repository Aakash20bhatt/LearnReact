import { BASE_URL } from '../utils/common';
import { useContext, useEffect } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import MovieContext from '../Contexts/MovieContext';
import { useDispatch, useSelector } from 'react-redux';
import movieMiddleware from '../redux/movieMiddleware';
// import PaginationContext from '../Contexts/PaginationContext'

export default function Movies(){
    // const [movies, setMovies] = useState([]);
    const { watchList } = useContext(MovieContext);
    const { pageNo } = useSelector((store)=>store.paginationState)
    const { movies, loading, error } = useSelector((store)=>store.moviesState)

    useEffect(()=>{
        localStorage.setItem('watchList',JSON.stringify(watchList));
    },[watchList])


    useEffect(()=>{
        const dispatch = useDispatch();
        dispatch(movieMiddleware(pageNo));
    },[pageNo])

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Oops...Error Occured...</h1>
    }

    return (
        <>
            <h1 className="text-center	m-12 text-4xl">Trending Movies</h1>
            <div className="flex flex-wrap justify-evenly">
                {
                    movies.map((movie)=>{
                        return <MovieCard 
                        key={movie.id}
                        title={movie.title} 
                        movie={movie}
                        fav={watchList.some((movieObj) => movieObj.id === movie.id)}
                        poster={BASE_URL+movie.backdrop_path}/>
                    })
                }
            </div>
            <Pagination/>
        </>
    )
}