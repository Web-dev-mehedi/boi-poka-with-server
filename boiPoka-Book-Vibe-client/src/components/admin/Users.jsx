import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  //
  const usersData = useLoaderData();

  const [newUserData , setUserData] = useState(usersData);

  //

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setUserData(newUserData.filter(i=> i._id !== id))
      });
   
  };

  const handleAllDelete =()=>{
       fetch('http://localhost:5000/users',{
        method:"DELETE",
       }).then(res=> res.json())
       .then(data =>{
         
       })
  }
//   
  return (
    <div className="container  w-11/12 mx-auto py-20">
         <h1 className="text-4xl font-semibold text-center mb-16">User List</h1>
           <div className="flex justify-between gap-4 mb-6">
                <div></div>
               <button onClick={handleAllDelete} className="btn btn-warning">Remove all user</button>
           </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newUserData.map((user) => (
          <div
            className="bg-slate-100 rounded-lg p-6 flex justify-between items-start gap-6"
            key={user._id}
          >
            <img className="rounded-full" src={user.photoURL} />
            <div className="space-y-6">
              <h1 className="text-xl font-medium">Name : {user.displayName}</h1>
              <p>Email: {user.email}</p>
              <p>Provider : {user.providerId}</p>
              <p>Verified : {user.emailVerified ? "Yes" : "No"}</p>
            </div>
            <button onClick={() => handleDelete(user._id)} className="btn">
              Delete This
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
