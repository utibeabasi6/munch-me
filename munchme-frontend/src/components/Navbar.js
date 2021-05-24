import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { userIsLoggedIn } from '../services/auth';
import { CartContext } from '../services/cart';
import { LoginButton, LogoutButton } from './auth_components';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(userIsLoggedIn)
    const { cartValue } = useContext(CartContext)
    return (<nav className='navbar'>
        <NavLink to='/' className='logo'>Munch Me</NavLink>
        <ul>
            <li><NavLink to='/cakes'>Products</NavLink></li>
            <li><NavLink to='/cart'>Cart <span>{cartValue}</span></NavLink></li>
            <li>{isLoggedIn ? <LogoutButton setIsLoggedIn={setIsLoggedIn} /> : <LoginButton setIsLoggedIn={setIsLoggedIn} />}</li>
        </ul>
    </nav>)
}

