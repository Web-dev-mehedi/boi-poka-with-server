import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoutes = ({children}) => {
const {users , loader} = useContext(AuthContext)
     
 if(loader){
   return <div className="flex justify-center items-center py-40"><span className="loading loading-bars loading-lg  "></span>  </div>
 }
if(users){
    return children
}
return <Navigate to="/login"></Navigate>
    
   
};

export default PrivetRoutes;