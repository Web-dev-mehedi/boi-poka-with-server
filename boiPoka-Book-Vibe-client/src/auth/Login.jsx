import React, { useContext } from 'react';
import { AuthContext } from '../contextApi/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Login = () => {

const {signInWithGoogle}  = useContext(AuthContext);
const usersFormDb = useLoaderData();

// 
    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then((result)=>{
           //    
            const { displayName , email , emailVerified , phoneNumber,photoURL,providerId } = result.user || {} ;
            const userInfo = {displayName , email , emailVerified , phoneNumber,photoURL,providerId};
            // 
            if(usersFormDb.find(i=>i.email === email)){
                alert('item have on database')
                return
               }else{
                fetch('http://localhost:5000/users',{
                    method:"POST",
                    headers:{
                      'content-type' : 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                   })
                   .then(res=> res.json())
                   .then( () => {
                    alert("data added in database")
                   })
               
               }

        }).catch(err=>{
            console.log(err)
        })

      
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary"  type="button">Sign In With Google</button>
        </div>
    );
};

export default Login;