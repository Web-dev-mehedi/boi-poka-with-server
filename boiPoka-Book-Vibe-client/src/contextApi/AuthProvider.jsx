import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../utilities/firebase.init';



export const AuthContext= createContext();

const AuthProvider = ({children}) => {

    const [users , setUsers] = useState(null);
    const [loader , setLoader] = useState(true);
    // for admin login
    const [adminlog , setAdminLog] = useState(null)
    const [inAdminlog , setInAdminLog] = useState(null)
      
    // 

// google auth

const provider = new GoogleAuthProvider();

const signInWithGoogle = ()=>{
    return signInWithPopup(auth , provider)
}


useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth , currentUser =>{
          if(currentUser){
                setUsers(currentUser);
                setLoader(false)
          }else{
            setLoader(true)  
          }

        //   
          const admin = import.meta.env.VITE_ADMIN_USER;
          const pass = import.meta.env.VITE_ADMIN_PASS;
          setAdminLog({admin,pass})
      })
      
      return unsubscribe;

        
},[])



const authInfo = {
    signInWithGoogle,
    setUsers,
    users,
    loader,
    setLoader,
    adminlog,
    setInAdminLog,
    inAdminlog
}


    return (
        <AuthContext.Provider value = {authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;