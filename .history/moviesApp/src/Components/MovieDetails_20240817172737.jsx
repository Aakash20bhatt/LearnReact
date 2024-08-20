import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/common";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails(){
    const [image, setImage] = useState('')
    const [info, setInfo] = useState('')
    const [year, setYear] = useState('')
    const {id} = useParams()

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
            setInfo(detail)
            console.log(res)
            setImage(BASE_URL+detail.poster_path)
            setYear(detail.release_date.substring(0, 4))
        })
    },[])

    return (
    <>
        <div className="h-[60vh] bg-cover bg-center flex items-start py-4 px-8 gap-10">
            <img className="h-full w-80"  src={`${image}`} alt="" />
            <div className="">
                <p className="title text-2xl font-semibold">{info.original_title} <span>({year})</span></p>
                <span>{info.release_date}</span>
                <span> &bull; </span>
                {info.genres.map((genre)=>{
                    return (<span> {genre.name} </span>)
                })}
                <span> &bull; </span>
                <span>{info.runtime}min</span>
            </div>
        </div>
    </>
    );
}