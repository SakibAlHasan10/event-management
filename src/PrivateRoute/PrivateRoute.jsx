import PropTypes from 'prop-types'
import useApi from '../ContextApi/useApi';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user}=useApi()
    if(user){
        return children
    }
    return <Navigate to={'/'}/>
};
PrivateRoute.propTypes ={
    children: PropTypes.node
}
export default PrivateRoute;