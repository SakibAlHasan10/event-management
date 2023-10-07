import { createContext, useState } from 'react';
export const AuthContext = createContext(null)
import PropTypes from 'prop-types'
const AuthProvider = ({children}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal=() =>{
    setIsOpen(true);
  }
const AuthInfo ={
    modalIsOpen,
    openModal,
}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;