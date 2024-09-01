import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar'
import './App.css';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';
import AboutPage from './Components/AboutPage';

function LazyApp(){

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default LazyApp;