import PropTypes from 'prop-types'
import useApi from '../ContextApi/useApi';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user, loading}=useApi()
    if(loading){
        // console.log(loading);
        return <div className='h-[70vh] pt-16 flex justify-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
        
    }
    if(user){
        return children
    }
    return <Navigate to={'/sign-in'}></Navigate>
};
PrivateRoute.propTypes ={
    children: PropTypes.node
}
export default PrivateRoute;