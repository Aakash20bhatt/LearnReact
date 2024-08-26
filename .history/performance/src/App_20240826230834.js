import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/HomePage';
import Contact from './Components/ContactPage';
import About from './Components/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/about' element={About}/>
        <Route path='/contact' element={Contact}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
