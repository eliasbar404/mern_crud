import { NavLink } from 'react-router-dom'
import '../Css/Navbar.css'

export default function Navbar() {
    return (

    <nav>

        <h1>Crud Application</h1>
        <ul>
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/Add'>Add</NavLink>
        </ul>

    </nav>

    )
}





