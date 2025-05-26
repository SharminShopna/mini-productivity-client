import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null);
import {
  signOut,

  
} from "firebase/auth";
import auth from "../Firebase/firebase.init";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(false);

     const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

    const authInfo = {
        user,
        loading,
        logout,
        isDarkMode,
        setIsDarkMode,

    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;