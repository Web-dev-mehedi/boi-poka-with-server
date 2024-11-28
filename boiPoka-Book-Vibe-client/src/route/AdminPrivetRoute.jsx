import React, { useContext } from 'react';
import { AuthContext } from '../contextApi/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminPrivetRoute = ({children}) => {
    const {adminlog , inAdminlog} = useContext(AuthContext);
    console.log(adminlog , inAdminlog)
     if(inAdminlog?.pass === adminlog?.pass && inAdminlog?.userName === adminlog?.admin ){
        return children
     }else{
        return <Navigate to="/admin/login"></Navigate>
     }
  
}
export default AdminPrivetRoute ;