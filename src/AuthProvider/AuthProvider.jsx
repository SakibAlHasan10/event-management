import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
import { Toaster } from 'react-hot-toast';
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  
  const [ourServices, setOurServices] = useState([])
  const [isLoader, setIsLoader] = useState(true)
  const [user, setUser] = useState(null)
  const googleProvider = new GoogleAuthProvider()
  const gitHubProvider = new GithubAuthProvider()
  useEffect(()=>{
    // setIsLoader(true)
    fetch('/services.json')
    .then(res =>res.json())
    .then(data => setOurServices(data.services))
  },[])
  // signIn with google
  const registerWithGoogle = ()=>{
    setIsLoader(true)
    return signInWithPopup(auth, googleProvider)
  }
  // sign with github
  const registerWithGitHub =()=>{
    setIsLoader(true)
    return signInWithPopup(auth, gitHubProvider)
  }
  // create user with email and password 
  const signUpWithEmail =(email, password)=>{
    setIsLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // sign in with email
  const signInWithEmail =(email, password)=>{
    setIsLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // on auth State change 
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setIsLoader(false)
    })
    return ()=>{
      unSubscribe()
    }
  },[])

  // signOut
  const logOut =()=>{
    setIsLoader(true)
    return signOut(auth)
  }






const AuthInfo ={
    ourServices,
    user,
    isLoader,
    registerWithGoogle,
    registerWithGitHub,
    signUpWithEmail,
    signInWithEmail,
    logOut,
}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
            <Toaster/>
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;