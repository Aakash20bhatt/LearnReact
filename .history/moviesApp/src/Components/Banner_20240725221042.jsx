import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = "https://image.tmdb.org/t/p/original/"

export default function Banner(){
    const [trendingMovie, setTrendingMovie] = useState(null);

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346').then(function(res){
            let randomMovie = res.data.results[Math.floor(Math.random()*20)];
            setTrendingMovies(randomMovie);
        })
    })


    return (
        <div className="h-[75vh] bg-cover bg-center flex items-end" style={{backgroundImage: `url(${BASE_URL + trendingMovie.backdrop_path})` }}>
            <p className="text-white w-full text-center text-2xl">{trendingMovie.title}</p>
        </div>
    )
}