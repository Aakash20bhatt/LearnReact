// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import NavBar from './Components/NavBar'
// import { Suspense, lazy } from 'react';
import './App.css';
import LargeArraySum from './Components/LargeArraySum';
import Todo from './Components/Todo';

// const HomePage = lazy(()=>(import('./Components/HomePage')));
// const ContactPage = lazy(()=>(import('./Components/ContactPage')))
// const AboutPage = lazy(()=>(import('./Components/AboutPage')))

function LazyApp(){

    return(
        // <BrowserRouter>
        //     <NavBar/>
        //     <Suspense fallback={<div>...Loading</div>}>
        //         <Routes>
        //                 <Route path="/" element={<HomePage/>}/>
        //                 <Route path="/contact" element={<ContactPage/>}/>
        //                 <Route path="/about" element={<AboutPage/>}/>
        //         </Routes>
        //     </Suspense>
        // </BrowserRouter>
        <LargeArraySum/>
        <Todo/>
    )

}

export default LazyApp;