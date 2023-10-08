import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [ourServices, setOurServices] = useState([])
  const googleProvider = new GoogleAuthProvider()
  const gitHubProvider = new GithubAuthProvider()
  useEffect(()=>{
    fetch('/services.json')
    .then(res =>res.json())
    .then(data => setOurServices(data.services))
  },[])
  // signIn with google
  const registerWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider)
  }
  // sign with github
  const registerWithGitHub =()=>{
    return signInWithPopup(auth, gitHubProvider)
  }






const AuthInfo ={
    ourServices,
    registerWithGoogle,
    registerWithGitHub,
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