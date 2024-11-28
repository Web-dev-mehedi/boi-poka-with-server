import React, { useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider";
import { FaRegUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../utilities/firebase.init";

const Header = () => {
  const { users } = useContext(AuthContext);
  console.log(users)

// 
     const handleSignOut = ()=>{
      useEffect( ()=>{
        signOut(auth)
        .then(()=>{
  
        }).catch(err=>{
  
        })
        
      },[])
  }

  return (
    <div className="navbar bg-[#ffffff6d] backdrop-blur-md py-8 border-b border-[#eeeeee87] sticky top-0 z-30">
      <div className="w-11/12 mx-auto flex gap-8 flex-wrap sm:flex-nowrap">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 space-y-6 p-5 shadow"
            >
              <NavLink to="/">Home</NavLink>
               {users&&  <NavLink to="/listed-books">Listed Books</NavLink>}
              <NavLink to="/pages-to-read">Pages to Read</NavLink>
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex justify-between items-center gap-6 px-1 text-lg font-normal ">
            <NavLink to="/">Home</NavLink>
            {users&&  <NavLink to="/listed-books">Listed Books</NavLink>}
            <NavLink to="/pages-to-read">Pages to Read</NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-4 justify-start sm:justify-end text-right">
          {!users ? (
            <>
            <Link to="/login" className="rounded-full w-12 h-12 bg-slate-400 flex justify-center items-center">
                <FaRegUser className="text-xl" />
              </Link>
              <Link to="/login" className="btn btn-primary">
                log In
              </Link>
              <Link to="/" className=" btn btn-success">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="rounded-full w-12 h-12">
                 <img src={users?.photoURL} className="rounded-full" alt=""/>
              </Link>
                
              <Link onClick={handleSignOut} to="/" className=" btn btn-success">
                Sign Out
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
