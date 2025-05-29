import React, { createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import axios from 'axios';

// Create context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Create User (Register)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout User
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update User Profile
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
      setUser(currentUser);
      console.log('state captured', currentUser?.email)
      if (currentUser?.email) {
        // Send token to backend
        const userInfo = { email: currentUser.email };
        await axios.post("https://mini-productivity-server-2.onrender.com/jwt", userInfo, {
          withCredentials: true,
        });
      } else {
        await axios.get("https://mini-productivity-server-2.onrender.com/logout", {
          withCredentials: true,
        });
      }
      setLoading(false);
    });

    // Cleanup
    return () => unsubscribe();
  }, []);

  // Auth context value
  const authInfo = {
    user,
    loading,
    createUser,
    userLogin,
    logout,
    updateUserProfile,
    isDarkMode,
    setIsDarkMode,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
