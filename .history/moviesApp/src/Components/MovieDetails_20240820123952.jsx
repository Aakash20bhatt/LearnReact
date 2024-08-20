import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/common";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails(){
    const [image, setImage] = useState('')
    const [info, setInfo] = useState('')
    const [year, setYear] = useState('')
    const {id} = useParams()
    const [loader, setLoader] = useState(true)
    const [director, setDirector] = useState([]);
    const [producer, setProducer] = useState([]);
    const [movieUrl, setMovieUrl] = useState('');
    let [cast, setCast] = useState([]);

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
            setImage(BASE_URL+detail.poster_path)
            setYear(detail.release_date.substring(0, 4))
            setLoader(false)
            setMovieUrl(detail.homepage)
        })
    },[])

    useEffect(()=>{
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmNlOGU2ZDUyN2U3M2Q0YjJhZjQ5ZjRiMDkzMzdiMSIsIm5iZiI6MTcyMzg4NDA1MC45MzEwMTksInN1YiI6IjY2YTEzN2RjMmRlMWJhYWFjMzVkYWYyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6dZvJNIVWKrYVKf_1AB8c1uo-7mDRDe_tAuJyAacOBU'
            }
        }; 
        
        axios.get(url,options).then(function(res){
            let castObj = res.data.cast;
            let crewObj = res.data.crew;
            console.log(castObj);
            setCast(...cast,castObj)
            for(let ele of crewObj){
                if(ele.job.includes("Director")){
                    setDirector([...director,ele.original_name])
                }

                if(ele.job.includes("Producer")){
                    setProducer([...producer,ele.original_name])
                }
            }

        })
    },[])

    if(loader) return <h1>Loading...</h1>
    else{
        return (
        <>
            <div className="bg-cover bg-center flex items-center py-4 px-8">
                <a href={movieUrl} target="_blank"><img className="h-full w-80"  src={`${image}`} alt="" /></a>
                <div className="py-8 px-2">
                    <p className="title text-2xl font-semibold mb-2">{info.original_title} <span>({year})</span></p>
                    <span>{info.release_date}</span>
                    <span> &bull; </span>
                    {info.genres.map((genre)=>{
                        return (<span key={genre.id}> {genre.name} </span>)
                    })}
                    <span> &bull; </span>
                    <span>{info.runtime} min</span>
                    <div className="mt-10">
                        <p className="mb-2 italic">{info.tagline}</p>
                        <p className="mb-2 text-lg">OverView: </p>
                        <p className="pr-4 mt-4 text-base">{info.overview}</p>
                    </div>
                    <div className="flex mt-4">
                        <p className="mr-4">{director[0]}</p>
                        <p className="mr-4">{producer[0]}</p>
                    </div>
                </div>
            </div>

            <div className="cast py-4 px-8">
                <h2>Top Biled Cast</h2>
                <div className="">
                    <a href="">
                        <img src={`${BASE_URL}${cast.profile_path}`} alt="" />
                    </a>
                </div>
            </div>
        </>
        );
    }
}