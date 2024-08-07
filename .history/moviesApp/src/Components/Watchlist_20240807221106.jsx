import { BASE_URL } from "../utils/common";
import { GENRES_ID_MAPPING } from "../utils/common";

export default function Watchlist({movies,removeFromWatchList}){
    let genres = ["All Genres", "Comedy", "Comedy", "Drama","Adventure"];

    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex w-[90%] my-8 justify-evenly">
                {
                    genres.map((genre,index)=>{
                        return <div key={index} className="cursor-pointer text-2xl rounded-2xl text-white h-[3rem] w-[12rem] bg-slate-400 flex items-center justify-center">
                            {genre}
                        </div>
                    })
                }
            </div>
            <input placeholder="Search..." className="h-[4rem] p-4 w-[24rem] my-8 text-2xl bg-slate-200 outline-none" />
            <table className="rounded-xl border w-[90%] overflow-hidden">
                <thead className="bg-slate-300 h-12 rounded-lg">
                    <tr className="border-b-2 text-left">
                        <th className="p-2">Name</th>
                        <th>
                            <i className="fa-solid fa-angle-up mr-2"></i>
                            Ratings
                            <i className="fa-solid fa-angle-down mr-2"></i>
                        </th>
                        <th>
                            <i className="fa-solid fa-angle-up mr-2"></i>
                            Popularity
                            <i className="fa-solid fa-angle-down ml-2"></i>
                        </th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie)=>{
                        return (
                            <tr key={movie.id} className="border-2	hover:bg-slate-100"> 
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