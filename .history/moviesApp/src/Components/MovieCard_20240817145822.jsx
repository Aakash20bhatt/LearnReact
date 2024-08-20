import { useContext } from "react"
import MovieContext from "../Contexts/MovieContext"
import { Link } from "react-router-dom"

export default function MovieCard({movie,fav, title, poster}){
    const {addToWatchList,removeFromWatchList} = useContext(MovieContext)
    return(
            <div className="hover:scale-105 duration-300 cursor-pointer relative m-4 rounded-[1rem] overflow-hidden">
                <Link to="/movieDetail">
                    <div>
                        <img src={poster} alt="" className="h-[20rem] w-[12rem] object-cover" />
                        <p className="absolute left-[50%] bottom-2 translate-x-[-50%] text-white"> {title}</p>
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