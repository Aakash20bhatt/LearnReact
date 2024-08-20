import { useContext } from "react"
import MovieContext from "../Contexts/MovieContext"
import { Link } from "react-router-dom"

export default function MovieCard({movie,fav, title, poster}){
    const {addToWatchList,removeFromWatchList} = useContext(MovieContext)
    return(
            <div className="hover:scale-105 duration-300 cursor-pointer relative m-4 rounded-[1rem] overflow-hidden">
                <Link to={`${movie.title.replace(/[:\s]+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')}/${movie.id}`}>
                    <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-end items-end"
                    style={{backgroundImage: `url(${poster})`}}>
                        <div className="text-white text-center w-full p-2 bg-gray-900/70"> {title}</div>
                    </div>
                </Link>
                <div className="absolute top-2 right-2 h-8 w-8 bg-black flex items-center justify-center rounded-lg">
                    {
                        fav?(
                            <div onClick={() => removeFromWatchList(movie)}>❌</div>
                        ):
                        (
                            <div onClick={() => addToWatchList(movie)}>😍</div>
                        )
                    }

                </div>
            </div>

    )
}