import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar'
import './App.css';

function LazyApp(){

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route/>
            </Routes>
        </BrowserRouter>
    )

}

export default LazyApp;