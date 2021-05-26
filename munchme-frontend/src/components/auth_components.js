import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { logoutUser } from "../services/auth";

export function LoginButton() {
    return <Button as={Link} to={'/login'} content='Login' />
}

export function LogoutButton() {
    return <Button content='Logout' onClick={() => {
        logoutUser()
        window.location.assign('/')
    }} />
}