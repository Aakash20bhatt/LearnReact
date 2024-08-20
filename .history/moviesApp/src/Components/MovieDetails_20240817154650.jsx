import { useEffect } from "react";
import { BASE_URL } from "../utils/common";
import { useParams } from "react-router-dom";

export default function MovieDetails(){

    const {title,id} = useParams()

    // useEffect(()=>{
    //     axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`)
    // },[])

    return (
    <>
        <div>
            {title +" "+ id}
        </div>
    </>
    );
}