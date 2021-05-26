import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../services/cart';
import '../styles/navbar.css'
export default function Navbar() {
    const { cartValue } = useContext(CartContext)
    return (<nav className='navbar'>
        <NavLink to='/' className='logo' color='red'>Munch Me</NavLink>
        <ul>
            <li><NavLink to='/cakes'>Products</NavLink></li>
            <li><NavLink to='/cart'>Cart <span>{cartValue}</span></NavLink></li>
        </ul>
    </nav>)
}

