import { createContext, useState } from 'react';
const AuthContext = createContext(null)
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

export default AuthProvider;