import axios from 'axios';
import { useEffect, useState } from 'react';
import {BASE_URL} from '../utils/common'


export default function Banner(){
    const [title, setTitle] = useState("");
    const [bannerImage , setBannerImage] = useState("")
 
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346').then(function(res){
            let randomMovie = res.data.results[Math.floor(Math.random()*20)];
            setTitle(randomMovie.title);
            setBannerImage(BASE_URL+randomMovie.backdrop_path)
        })
    })


    return (
        <div className="h-[75vh] bg-cover bg-center flex items-end" style={{backgroundImage: `url(${bannerImage})` }}>
            <p className="text-white w-full text-center text-2xl">{title}</p>
        </div>
    )
}