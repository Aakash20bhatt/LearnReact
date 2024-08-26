import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';

function App() {

  const[ContactPage,setContactPage]=useState(null);
  const[AboutPage,setAboutPage]=useState(null);

  return (
    <BrowserRouter>
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to='/about' onClick={loadAbout}>About Us</Link>
            </li>
            <li>
                <Link to='/contact' onClick={laodContact}>Contact</Link>
            </li>
        </ul>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={AboutPage?<AboutPage/>:<div>...Loading</div>}/>
        <Route path="/contact" element={ContactPage?<ContactPage/>:<div>...Loading</div>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
