import React from "react";
import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookCard = ({ book , setBookData , newBookData }) => {
  const { bookName, author, photoUrl, tags, totalPages, category, _id } =
    book || {};

  const handleDelete = (id) => {
    //
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/admin/books/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setBookData(newBookData.filter(item => item._id !== id))
          });
      }
    });
  };

  return (
    <div className="card card-side items-start flex-wrap bg-[#F5F4F1] shadow-xl rounded-lg p-6">
      <figure className="w-48 h-32 mx-auto ">
        <img
          className="rounded-lg object-cover w-full mx-auto"
          src={photoUrl}
          alt="coffee"
        />
      </figure>
      <div className="card-body p-0 px-6 capitalize">
        <h2 className="card-title">Name : {bookName}</h2>
        <p>Author Name : {author}</p>
        <p>Total Pages : {totalPages}</p>
        <p>tags : {tags}</p>
        <p> category : {category}</p>
      </div>

      <div className="flex flex-col gap-2 ">
        <button className="btn bg-[#D2B48C] text-[#ffffff] text-xl">
          <Link to={`/books/${_id}`}>
            <span>
              <AiFillEye />
            </span>
          </Link>
        </button>
        <button className="btn bg-[#3C393B] text-[#ffffff] text-xl">
          <Link to={`/admin/updateBooks/${_id}`}>
            <span>
              <AiFillEdit />
            </span>
          </Link>
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-[#EA4744] text-[#ffffff] text-xl"
        >
          <span>
            <AiFillDelete />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
