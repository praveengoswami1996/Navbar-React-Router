import './UserAction.css';
import { Link } from 'react-router-dom';

function UserAction({ children, image, ...rest }) {
    return (
        <div className="user__wrapper">
            <div className='user__image'>
                <img src={image} alt="User img" />
            </div>
            <Link
                {...rest} 
                className='userActionLink'  
            >{children}</Link>
        </div>
    )
}

export default UserAction;

