import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to='/about'>About Us</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    )
}