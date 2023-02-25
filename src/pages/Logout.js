import { useNavigate } from "react-router-dom";

function Logout({ onLogout }) {
    /*
    const data = {
        'name': 'Praveen Goswami'
    }*/

    const navigateTo = useNavigate();

    const handleGoToHomepage = () => {
        navigateTo('/');
        //We can also send data here..
        //For Example : navigateTo('/', {state: data});
        //This data can be accessed by using useLocation hook
    }

    return (
        <div className="app__logout">
            <h1>--User Logged Out Successfully--</h1>
            <button onClick={handleGoToHomepage}>Go to Homepage</button>
        </div>
    )
}

export default Logout;