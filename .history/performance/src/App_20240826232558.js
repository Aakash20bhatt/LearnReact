import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={HomePage}/>
        <Route path="/about" element={AboutPage}/>
        <Route path="/contact" element={ContactPage}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
