import { BASE_URL } from '../utils/common';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import MovieContext from '../Contexts/MovieContext';
import PaginationContext from '../Contexts/PaginationContext'

export default function Movies(){
    const [movies, setMovies] = useState([]);
    const  {watchList} = useContext(MovieContext);
    const {pageNo} = useContext(PaginationContext)

    useEffect(()=>{
        localStorage.setItem('watchList',JSON.stringify(watchList));
    },[watchList])


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346&page=${pageNo}`).
        then((res)=>{
            setMovies(res.data.results);
        });
    },[pageNo])

    if(!movies){
        return <h1>Loading...</h1>
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