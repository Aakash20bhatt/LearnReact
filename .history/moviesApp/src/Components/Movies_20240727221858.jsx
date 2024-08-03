import { BASE_URL } from '../utils/common';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

export default function Movies(){
    const [movies, setMovies] = useState(null);
    const [pageNo,setPageNo] = useState(1);
    const [watchList,setWatchList] = useState(
        JSON.parse(localStorage.getItem('watchList'))||[]
    );

    useEffect(()=>{
        localStorage.setItem('watchList',JSON.stringify(watchList));
    },[watchList])

    const handlePrev=(e)=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
    }

    const handleNext=(e)=>{
        setPageNo(pageNo+1)
    }

    const addToWatchList = (movieId)=>{
        const newWatchList = [...watchList,movieId]
        setWatchList(newWatchList);
    }

    const removeWatchList = (movieId)=>{
        const filteredWatchList = watchList.filter(item=> !item.id!==movieId);
        setWatchList(filteredWatchList);
    }

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
                        id={movie.id}
                        fav={watchList.includes(movie.id)}
                        addWatchList = {addToWatchList}
                        removeWatchList = {removeWatchList}
                        poster={BASE_URL+movie.backdrop_path}/>
                    })
                }
            </div>
            <Pagination pageNo={pageNo}  handleNext={handleNext} handlePrev={handlePrev}/>
        </>
    )
}