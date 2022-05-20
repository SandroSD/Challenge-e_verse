import { Redirect, Route } from 'react-router-dom';
import jwt from 'jwt-decode';

function ProtectedRoute({ component: Component, ...otherProps }) {
    const token = localStorage.getItem('token_session');
    let isValidToken = true;

    if (!token) {
        isValidToken = false;
    } else {
        const decoded_token = jwt(token);
    
        if (Date.now() >= decoded_token.exp * 1000) {
            isValidToken = false;
        }
    }

    return (
        <Route
            {...otherProps}
            render={props =>
                isValidToken ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    )
}

export default ProtectedRoute;