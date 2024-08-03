import { BASE_URL } from '../utils/common';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export default function Movies(){
    const [movies, setMovie] = useState(null)

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346").
        then((res)=>{
            console.log(res)
            setMovie(res.data.results);
        });
    },[])

    if(!movies){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Trending Movies</h1>
            <div className="flex flex-wrap justify-evenly">
                movies.map((item){
                    <MovieCard key={item.id} title={item.title} poster={BASE_URL+item.backdrop_path}/>
                })
            </div>

        </>
    )
}