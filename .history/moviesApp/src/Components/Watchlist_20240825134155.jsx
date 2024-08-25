import { useContext, useEffect, useState } from "react";
import { GENRES_ID_MAPPING, ALL_GENRES, BASE_URL } from "../utils/common";
import MovieContext from "../Contexts/MovieContext";
import { useNavigate } from "react-router-dom";
import { FixedSizeList } from "react-window";

export default function Watchlist() {
    const { watchList: movies, removeFromWatchList, setWatchList } = useContext(MovieContext);
    const [genres, setGenres] = useState([ALL_GENRES]);
    const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES);
    const [search, setSearchValue] = useState('');
    const [debouncedSearch, setDebounceSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const genreList = movies.map((movieObj) => {
            return GENRES_ID_MAPPING[movieObj.genre_ids[0]];
        });
        const uniqueGenreList = new Set(genreList);
        setGenres([ALL_GENRES, ...uniqueGenreList]);
    }, [movies]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceSearch(search);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    const sortAscending = (key) => {
        const sortedMovies = [...movies].sort((movieA, movieB) => {
            return movieA[key] - movieB[key];
        });
        setWatchList(sortedMovies);
    };

    const sortDescending = (key) => {
        const sortedMovies = [...movies].sort((movieA, movieB) => {
            return movieB[key] - movieA[key];
        });
        setWatchList(sortedMovies);
    };

    const filteredMovies = movies.filter((movieObj) => {
        if (selectedGenre === ALL_GENRES) return true;
        return selectedGenre === GENRES_ID_MAPPING[movieObj.genre_ids[0]];
    }).filter((movieObj) => {
        return movieObj.title.toLowerCase().includes(debouncedSearch.toLowerCase());
    });

    const Row = ({ index, style }) => {
        const movie = filteredMovies[index];
        return (
            <tr key={movie.id} style={style} className="border-2 hover:bg-slate-100">
                <td className="flex m-4 gap-8 items-center">
                    <div onClick={() => navigate(`/${movie.title.replace(/[:\s]+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}/${movie.id}`)}>
                        <img className="h-32 w-36 rounded-lg cursor-pointer"
                            src={BASE_URL + movie.backdrop_path}
                            alt="poster" />
                    </div>
                    {movie.title}
                </td>
                <td className="p-4">{movie.vote_average}</td>
                <td className="p-4">{movie.popularity}</td>
                <td className="p-4">{GENRES_ID_MAPPING[movie.genre_ids[0]]}</td>
                <td onClick={() => removeFromWatchList(movie)} className="text-rose-600 cursor-pointer p-4">
                    <i className="fa-solid fa-trash"></i>
                </td>
            </tr>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap gap w-[90%] my-8 justify-evenly">
                {genres.map((genre, index) => (
                    <div 
                        key={index}
                        onClick={() => setSelectedGenre(genre)}
                        className={`cursor-pointer text-2xl rounded-2xl text-white h-[3rem] 
                        w-[12rem] flex items-center justify-center
                        mb-4
                        ${genre === selectedGenre ? "bg-blue-400" : "bg-slate-400"}`}
                    >
                        {genre}
                    </div>
                ))}
            </div>
            <input
                value={search}
                placeholder="Search..." 
                className="h-[4rem] p-4 w-[24rem] my-8 text-2xl bg-slate-200 outline-none" 
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="rounded-xl border w-[90%] overflow-hidden">
                <div className="heading bg-slate-300 h-12 rounded-lg">
                    <div className="heading-row border-b-2 text-left">
                        <div className="column p-2">Name</div>
                        <div className="column">
                            <i onClick={() => sortAscending('vote_average')} className="cursor-pointer fa-solid fa-angle-up mr-2"></i>
                            Ratings
                            <i onClick={() => sortDescending('vote_average')} className="cursor-pointer fa-solid fa-angle-down mr-2"></i>
                        </div>
                        <div className="column">
                            <i onClick={() => sortAscending('popularity')} className="cursor-pointer fa-solid fa-angle-up mr-2"></i>
                            Popularity
                            <i onClick={() => sortDescending('popularity')} className="cursor-pointer fa-solid fa-angle-down ml-2"></i>
                        </div>
                        <div className="column">Genre</div>
                        <div className="column"></div>
                    </div>
                </div>
                <tbody>
                    <FixedSizeList
                        height={600} // adjust height as needed
                        itemCount={filteredMovies.length}
                        itemSize={100} // adjust row height as needed
                        width="100%"
                    >
                        {({ index, style }) => <Row index={index} style={style} />}
                    </FixedSizeList>
                </tbody>
            </div>
        </div>
    );
}
