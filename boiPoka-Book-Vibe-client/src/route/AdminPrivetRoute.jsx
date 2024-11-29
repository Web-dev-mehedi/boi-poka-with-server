import React, { useContext } from 'react';
import { AuthContext } from '../contextApi/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminPrivetRoute = ({children}) => {
    const {admin , inAdminlog} = useContext(AuthContext);
     if(admin.find(user => user._id === '6748cff6fe00fa1639827225')?.adminUser === inAdminlog.userName && admin.find(user => user._id === '6748cff6fe00fa1639827225')?.adminPass === inAdminlog.pass ){
        return children
     }else{
        return <Navigate to="/admin/login"></Navigate>
     }
  
}
export default AdminPrivetRoute ;