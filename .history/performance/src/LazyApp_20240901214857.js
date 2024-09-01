import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar'
import { Suspense, lazy } from 'react';
import './App.css';

const HomePage = lazy(()=>(import('./Components/HomePage')));
const ContactPage = lazy(()=>(import('./Components/ContactPage')))
const AboutPage = lazy(()=>(import('./Components/AboutPage')))

function LazyApp(){

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Suspense fallback={<div>...Loading</div>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Suspense>
            </Routes>
        </BrowserRouter>
    )

}

export default LazyApp;