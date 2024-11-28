import React, { useContext } from 'react';
import { AuthContext } from '../contextApi/AuthProvider';

const Login = () => {

const {signInWithGoogle}  = useContext(AuthContext)


    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then((result)=>{
            
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