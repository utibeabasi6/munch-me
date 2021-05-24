import { CustomButton } from "./custom_button";
import { Link } from "react-router-dom";
import { logoutUser } from "../services/auth";

export function LoginButton() {
    return <CustomButton as={Link} to={'/login'} content='Login' />
}

export function LogoutButton() {
    return <CustomButton content='Logout' onClick={() => {
        logoutUser()
        window.location.assign('/')
    }} />
}