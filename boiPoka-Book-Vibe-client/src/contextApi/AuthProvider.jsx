import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../utilities/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loader, setLoader] = useState(true);
  // for admin login
  const [admin, setAdmin] = useState([]);

  const [inAdminlog, setInAdminLog] = useState({});
  //

  // google auth

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    //
    //
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUsers(currentUser);
        setLoader(false);
      } else {
        setLoader(false);
      }

    });

    return unsubscribe;
  }, [users]);

  const authInfo = {
    signInWithGoogle,
    setUsers,
    users,
    loader,
    setLoader,
    admin,
    setAdmin,
    setInAdminLog,
    inAdminlog,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
