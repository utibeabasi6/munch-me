import { createContext } from "react";

export const getUser = () => sessionStorage.getItem('user');
export const userIsLoggedIn = sessionStorage.getItem('user') ? true : false
export const loginUser = (user) => sessionStorage.setItem('user', user)
export const logoutUser = () => sessionStorage.removeItem('user')
export const AuthContext = createContext(null)