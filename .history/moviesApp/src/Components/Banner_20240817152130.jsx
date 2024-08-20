import axios from 'axios';
import { useEffect, useState } from 'react';
import {BASE_URL} from '../utils/common'
import { Link } from 'react-router-dom';


export default function Banner(){
    const [title, setTitle] = useState("");
    const [bannerImage , setBannerImage] = useState("")
    const [movieID, setMovieID] = useState("")
 
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346').then(function(res){
            let randomMovie = res.data.results[Math.floor(Math.random()*20)];
            setMovieID(randomMovie.id);
            setTitle(randomMovie.title);
            setBannerImage(BASE_URL+randomMovie.backdrop_path)
        })
    })


    return (
        <Link to={`${title.replace(/\s+/g, '_')}/${movieID}`}>
            <div className="h-[75vh] bg-cover bg-center flex items-end cursor-pointer" style={{backgroundImage: `url(${bannerImage})` }}>
                <p className="text-white w-full text-center text-2xl">{title}</p>
            </div>
        </Link>
    )
}