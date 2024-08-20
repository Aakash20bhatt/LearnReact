import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/common";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails(){
    const [image, setImage] = useState('')
    const {title,id} = useParams()

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US?api_key=2634e9f079c604567d18059d526b4346`).then(function(res){
            let detail = res
            setImage(detail.poster_path)
        })
    },[])

    return (
    <>
        <div className="h-[75vh] bg-cover bg-center flex items-end">
            <img src={`${BASE_URL/image}`} alt="" />
        </div>
    </>
    );
}