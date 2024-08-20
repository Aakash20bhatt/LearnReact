import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/common";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails(){
    const [image, setImage] = useState('')
    const {title,id} = useParams()

    useEffect(()=>{
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmNlOGU2ZDUyN2U3M2Q0YjJhZjQ5ZjRiMDkzMzdiMSIsIm5iZiI6MTcyMzg4NDA1MC45MzEwMTksInN1YiI6IjY2YTEzN2RjMmRlMWJhYWFjMzVkYWYyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6dZvJNIVWKrYVKf_1AB8c1uo-7mDRDe_tAuJyAacOBU'
        }
        };
        axios.get(url,options).then(function(res){
            let detail = res.data
            console.log(res)
            setImage(BASE_URL+detail.poster_path)
        })
    },[])

    return (
    <>
        <div className="h-[75vh] bg-cover bg-center flex items-end">
            <img  src={`${image}`} alt="" />
        </div>
    </>
    );
}