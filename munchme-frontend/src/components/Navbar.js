import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from './Cart';

export default function Navbar() {
    const { value } = useContext(CartContext)
    return <nav className='navbar'>
        <NavLink to='/' className='logo'>Munch Me</NavLink>
        <ul>
            <li><NavLink to='/cakes'>Products</NavLink></li>
            <li><NavLink to='/cart'>Cart <span>{value}</span></NavLink></li>
        </ul>
        </nav>
}

