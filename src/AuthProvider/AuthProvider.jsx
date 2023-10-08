import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { Toaster } from "react-hot-toast";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  // signIn with google
  const registerWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign with github
  const registerWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  // create user with email and password
  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    
  };
  // sign in with email
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // on auth State change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
      setLoading(true);
    };
  }, []);

  // signOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const AuthInfo = {
    user,
    loading,
    registerWithGoogle,
    registerWithGitHub,
    signUpWithEmail,
    signInWithEmail,
    logOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
