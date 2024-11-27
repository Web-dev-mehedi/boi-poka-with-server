import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Admin = () => {
  const booksData = useLoaderData();

  return (
    <div className="container w-11/12 mx-auto py-20">

           <button className="btn btn-accent text-xl mb-8" type="button"><Link to="/admin/books">Add More book</Link> </button>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {booksData.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default Admin;
