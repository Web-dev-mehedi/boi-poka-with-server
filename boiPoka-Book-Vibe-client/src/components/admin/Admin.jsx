import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";
import { AuthContext } from "../../contextApi/AuthProvider";

const Admin = () => {
  const { users, setAdmin, admin, setInAdminLog } = useContext(AuthContext);
  // console.log();
  const booksData = useLoaderData();
  const [newBookData , setBookData ] = useState(booksData) ;
  //
  useEffect(() => {
    fetch(import.meta.env.VITE_ADMIN_API)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  }, []);
  
  //

const handleLogOut =()=>{
     setInAdminLog("");
     alert("logOut form admin panal successfully")
}

  // 
  return (
    <div className="container w-11/12 mx-auto py-20">
      <div className="flex justify-between gap-5">
        <button className="btn btn-accent text-xl mb-8" type="button">
          <Link to="/admin/books">Add More book</Link>{" "}
        </button>
        <button className="btn btn-accent text-xl mb-8" type="button">
          <Link to="/users">Site User</Link>{" "}
        </button>
        <Link to="/admin/login">
          <button onClick={handleLogOut} className="btn btn-accent text-xl mb-8" type="button">
            Log out
          </button>
        </Link>{" "}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {newBookData.map((book) => (
          <BookCard newBookData={newBookData} setBookData={setBookData} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Admin;
