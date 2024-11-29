import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const navigate = useNavigate()

    const {setInAdminLog} = useContext(AuthContext)
    const handleAdminLogin =(e)=>{
      e.preventDefault()
      const form = e.target;
      const userName = form.username.value;
      const pass = form.pass.value;
      const adminInfo = {userName , pass};
      setInAdminLog(adminInfo)
      navigate("/admin")
      form.reset();
      alert("login successFully")
    }


    // 
  return (
    <div className=" flex flex-col justify-center items-center gap-8 py-20">
      <h1 className=" text-4xl font-bold capitalize"> Admin login</h1>

      <form onSubmit={handleAdminLogin} className="space-y-6">
        <div className="space-y-6 ">
          <input
            type="text"
            placeholder="username"
            name="username"
            className="input input-bordered input-primary w-full max-w-xs"
          />

           <input
            type="text"
            name="pass"
            placeholder="password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <input  className="btn btn-warning mt-6" type="submit" value="Login" />
         {/* <Link to="/admin"> </Link> */}
      </form>
    </div>
  );
};

export default AdminLogin;
