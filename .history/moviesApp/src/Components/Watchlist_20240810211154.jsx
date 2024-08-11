import { useEffect, useState } from "react";
import { GENRES_ID_MAPPING, ALL_GENRES, BASE_URL } from "../utils/common";

export default function Watchlist({movies,removeFromWatchList,setWatchList}){
    const [genres,setGenres] = useState([ALL_GENRES]);
    const [selectedGenre,setSelectedGenre] = useState(ALL_GENRES)
    const [search, setSearchValue] = useState('');
    const [debouncedSearch, setDebounceSearch] = useState('')
    const itemHeight = 150;
    const height = 500;
    const [indices, setIndices] = useState([0,Math.floor(height/itemHeight)]);
    const visibleList = movies.slice(indices[0], indices[1]+1);

    useEffect(()=>{
        const genreList = movies.map((movieObj)=>{
            return GENRES_ID_MAPPING[movieObj.genre_ids[0]];
        });
        const uniqueGenreList = new Set(genreList);
        setGenres([ALL_GENRES,...uniqueGenreList])
    },[movies])

    useEffect(()=>{
        console.log(search)
        const handler = setTimeout(()=>{
            setDebounceSearch(search);
        },500)

        return ()=>{
            clearInterval(handler);
        }
    },[search])

    const sortAscending = (key)=>{
        const sortedMovies = [...movies].sort((movieA, movieB)=>{
            return movieA[key]-movieB[key];
        })
        setWatchList(sortedMovies);
    }

    const sortDescending = (key)=>{
        const sortedMovies = [...movies].sort((movieA, movieB)=>{
            return movieB[key]-movieA[key];
        })
        setWatchList(sortedMovies)
    }

    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap w-[90%] my-8 justify-evenly">
                {
                    genres.map((genre,index)=>{
                        return <div 
                        key={index} 
                        onClick={()=>setSelectedGenre(genre)}
                        className={`cursor-pointer text-2xl rounded-2xl text-white h-[3rem] 
                        w-[12rem] bg-slate-400 flex items-center justify-center
                        mb-4
                        ${genre===selectedGenre?'bg-blue-400':''}
                        `}>
                            {genre}
                        </div>
                    })
                }
            </div>
            <input value={search}
            placeholder="Search..." 
            className="h-[4rem] p-4 w-[24rem] my-8 text-2xl bg-slate-200 outline-none" 
            onChange={(e)=>setSearchValue(e.target.value)}/>
            <table className="rounded-xl border w-[90%] overflow-hidden" style={{overflow:"auto"}}>
                <thead className="bg-slate-300 h-12 rounded-lg">
                    <tr className="border-b-2 text-left">
                        <th className="p-2">Name</th>
                        <th>
                            <i onClick={()=>sortAscending('vote_average')}  className="cursor-pointer fa-solid fa-angle-up mr-2"></i>
                            Ratings
                            <i onClick={()=>sortDescending('vote_average')} className="cursor-pointer fa-solid fa-angle-down mr-2"></i>
                        </th>
                        <th>
                            <i onClick={()=>sortAscending('popularity')}  className="cursor-pointer fa-solid fa-angle-up mr-2"></i>
                            Popularity
                            <i onClick={()=>sortDescending('popularity')} className="cursor-pointer fa-solid fa-angle-down ml-2"></i>
                        </th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody style={{height:movies.length*itemHeight}}>
                    {visibleList.filter((movieObj)=>{
                        if(selectedGenre===ALL_GENRES) return true;
                        return selectedGenre === GENRES_ID_MAPPING[movieObj.genre_ids[0]]
                    }).filter((movieObj)=>{
                        return movieObj.title.toLowerCase().includes(debouncedSearch.toLowerCase().toLowerCase())
                    })
                    .map((movie)=>{
                        return (
                            <tr key={movie.id} className="border-2	hover:bg-slate-100" style={{height:itemHeight}}> 
                                <td className="flex m-4 gap-8 items-center">
                                    <img className="h-32 w-36 rounded-lg"
                                        src={BASE_URL + movie.backdrop_path}
                                        alt="poster" />
                                        {movie.title}
                                </td>
                                <td className="p-4">{movie.vote_average}</td>
                                <td className="p-4">{movie.popularity}</td>
                                <td className="p-4">{GENRES_ID_MAPPING[movie.genre_ids[0]]}</td>
                                <td onClick={()=>removeFromWatchList(movie)} className="text-rose-600 cursor-pointer p-4">
                                    <i className="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}