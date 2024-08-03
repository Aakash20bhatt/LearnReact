import { BASE_URL } from '../utils/common';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export default function Movies(){
    const [movies, setMovies] = useState(null)

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346").
        then((res)=>{
            setMovies(res.data.results);
        });
    },[])

    if(!movies){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1 className="text-center	m-12 text-4xl">Trending Movies</h1>
            <div className="flex flex-wrap justify-evenly">
                {
                    movies.map((movie)=>{
                        return <MovieCard key={movie.id} title={movie.title} poster={BASE_URL+movie.backdrop_path}/>
                    })
                }
            </div>
        </>
    )
}