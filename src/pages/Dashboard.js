import UserAction from "../components/UserAction";
import DashboardImage from '../assets/dashboard.svg';

function Dashboard({ onLogout }) {
    
    const handleLogout = () => {
        onLogout();
    } 

    return (
        <UserAction 
            image={DashboardImage} 
            onClick={handleLogout}
            to="/logout"
        >Click To Logout</UserAction>
    )
}

export default Dashboard;