import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import PropTypes from 'prop-types'
const AuthProvider = ({children}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ourServices, setOurServices] = useState([])
  useEffect(()=>{
    fetch('/services.json')
    .then(res =>res.json())
    .then(data => setOurServices(data.services))
  },[])
  // modal open
  const openModal=() =>{
    setIsOpen(true);
  }
  // modal close
  const closeModal =()=>{
    setIsOpen(false)
  }
  
const AuthInfo ={
    modalIsOpen,
    openModal,
    closeModal,
    ourServices
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