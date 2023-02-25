import { useLocation } from "react-router-dom";
import UserAction from "../components/UserAction";
import LoginImage from '../assets/login.svg';

function Login({ loggedIn, onLogin }) {
    let location = useLocation();

    let content;

    if (location.state) {
       content = <h1 className="messagetext">{location.state.msg}</h1>
    }
    
    const handleLogin = () => {
        onLogin();
    }

    return (
        <>
            {content}
            <UserAction 
                image={LoginImage} 
                onClick={handleLogin}
                to="/dashboard"
            >Click To Login</UserAction>
        </>
    )
}

export default Login;