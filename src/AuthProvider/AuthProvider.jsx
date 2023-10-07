import { createContext, useState } from 'react';
export const AuthContext = createContext(null)
import PropTypes from 'prop-types'
const AuthProvider = ({children}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal=() =>{
    console.log('jjjjj',true)
    setIsOpen(true);
  }
  const closeModal =()=>{
    setIsOpen(false)
  }
const AuthInfo ={
    modalIsOpen,
    openModal,
    closeModal,
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