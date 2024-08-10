import { useEffect, useState, useRef } from "react";
import { GENRES_ID_MAPPING, ALL_GENRES, BASE_URL } from "../utils/common";

export default function Watchlist({movies,removeFromWatchList,setWatchList}){
    const [genres,setGenres] = useState([ALL_GENRES]);
    const [selectedGenre,setSelectedGenre] = useState(ALL_GENRES);
    const [search, setSearchValue] = useState('');
    const [visibleMovies, setVisibleMovies] = useState([]);
    const listRef = useRef(null);

    const ITEM_HEIGHT = 100;  // Height of each item in pixels
    const VISIBLE_COUNT = 10; // Number of visible items

    useEffect(()=>{
        const genreList = movies.map((movieObj)=>{
            return GENRES_ID_MAPPING[movieObj.genre_ids[0]];
        });
        const uniqueGenreList = new Set(genreList);
        setGenres([ALL_GENRES,...uniqueGenreList]);
        updateVisibleMovies(0); // Initial rendering
    },[movies]);

    const updateVisibleMovies = (scrollTop) => {
        const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
        const endIndex = startIndex + VISIBLE_COUNT;
        setVisibleMovies(filteredMovies.slice(startIndex, endIndex));
    };

    const onScroll = () => {
        const scrollTop = listRef.current.scrollTop;
        updateVisibleMovies(scrollTop);
    };

    const sortAscending = (key)=>{
        const sortedMovies = [...movies].sort((movieA, movieB)=>{
            return movieA[key]-movieB[key];
        });
        setWatchList(sortedMovies);
    };

    const sortDescending = (key)=>{
        const sortedMovies = [...movies].sort((movieA, movieB)=>{
            return movieB[key]-movieA[key];
        });
        setWatchList(sortedMovies);
    };

    const filteredMovies = movies.filter((movieObj)=>{
        if(selectedGenre === ALL_GENRES) return true;
        return selectedGenre === GENRES_ID_MAPPING[movieObj.genre_ids[0]];
    }).filter((movieObj)=>{
        return movieObj.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex w-[90%] my-8 justify-evenly">
                {genres.map((genre, index) => (
                    <div 
                        key={index} 
                        onClick={()=>setSelectedGenre(genre)}
                        className={`cursor-pointer text-2xl rounded-2xl text-white h-[3rem] 
                        w-[12rem] bg-slate-400 flex items-center justify-center
                        ${genre===selectedGenre?'bg-blue-400':''}`}
                    >
                        {genre}
                    </div>
                ))}
            </div>
            <input value={search}
                placeholder="Search..." 
                className="h-[4rem] p-4 w-[24rem] my-8 text-2xl bg-slate-200 outline-none" 
                onChange={(e)=>setSearchValue(e.target.value)}/>
            <div 
                ref={listRef}
                onScroll={onScroll}
                style={{ height: VISIBLE_COUNT * ITEM_HEIGHT, overflowY: 'auto', width: '90%' }}
                className="rounded-xl border overflow-hidden"
            >
                <table style={{ position: 'relative', height: filteredMovies.length * ITEM_HEIGHT }}>
                    <thead className="bg-slate-300 h-12 rounded-lg sticky top-0">
                        <tr className="border-b-2 text-left">
                            <th className="p-2">Name</th>
                            <th>
                                <i onClick={()=>sortAscending('vote_average')} className="cursor-pointer fa-solid fa-angle-up mr-2"></i>
                                Ratings
                                <i onClick={()=>sortDescending('vote_average')} className="cursor-pointer fa-solid fa-angle-down mr-2"></i>
                            </th>
                            <th>
                                <i onClick={()=>sortAscending('popularity')} className="cursor-pointer fa-solid fa-angle-up mr-2"></i>
                                Popularity
                                <i onClick={()=>sortDescending('popularity')} className="cursor-pointer fa-solid fa-angle-down ml-2"></i>
                            </th>
                            <th>Genre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleMovies.map((movie, index) => {
                            const top = index * ITEM_HEIGHT;
                            return (
                                <tr key={movie.id} style={{ position: 'absolute', top }} className="border-2 hover:bg-slate-100">
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
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
