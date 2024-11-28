import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList} from "../../utilities/utilities";


const BookDetails = () => {
    //
    const { bookId } = useParams();
    console.log(bookId)
    //
    const data = useLoaderData();

    // 
  const [active, setActive] = useState(null);
 
  const [readBook,setReadBook] = useState([]);
  const handleActive1 = (id) => {
    setActive(true);
    addToStoredReadList(id);
  
    const book = data.find(item => item._id == id);
    const newReadBook = [...readBook,book]
    setReadBook(newReadBook);

  
  };
  const handleActive2 = (id) => {
    setActive(false);
    addToStoredWishList(id);
   
  };

  // for spicific book by id
  const {
    bookName,
    author,
    photoUrl,
    ratings,
    tags,
    publisher,
    yearOfPublishing,
    totalPages,
    category,
    bookReview
  } = data.find((book) => book._id === bookId);
  // 


  // 
  return (
    <div className=" lg:flex justify-between items-start space-y-12 gap-10 py-28">
      <figure className=" w-full lg:w-1/2 mx-auto p-12 sm:p-24 bg-[#f3f3f3] rounded-2xl">
        <img src={photoUrl} alt="book" className="w-full rounded-2xl" />
      </figure>
      <div className="w-full lg:w-1/2 mx-auto space-y-10">
        <div>
          <h1 className="text-4xl font-bold text-[#131313] playFair pb-4">
            {bookName}
          </h1>
          <h3 className="text-base font-medium text-[#131313c8] border-b border-[#d8d8d8d0] pb-5 ">
            By : {author}
          </h3>
        </div>
        {/*  */}
        <p className="text-base font-medium text-[#131313c8] border-b border-[#d8d8d8d0] pb-5">
          Category : {category}
        </p>
        {/*  */}
        <p className="text-base font-normal text-[#1313134f]">
          {" "}
          <strong className="text-black">Review : </strong> {bookReview}
        </p>
        {/*  */}
        <div className="flex justify-start items-center gap-6 flex-wrap border-b border-[#d8d8d8d0] pb-7">
        <span className="text-[#131313] text-base font-bold">Tag</span>
        
            <span className="bg-[#F3F3F3] text-[#23BE0A] rounded-full px-4 py-1 text-base font-medium"
            >
              # {tags}
            </span>
        </div>
        {/*  */}
        <div>
          <div className="flex justify-start items-start gap-10">
            <div className="text-[#131313be] font-medium flex flex-col justify-center items-start gap-4">
              <span>Number of Pages : </span>
              <span>Publisher : </span>
              <span>Year of Publishing : </span>
              <span>Rating : </span>
            </div>
            <div className="text-[#131313] font-semibold flex flex-col justify-center items-start gap-4">
              <span>{totalPages}</span>
              <span>{publisher}</span>
              <span>{yearOfPublishing}</span>
              <span>{ratings}</span>
            </div>
          </div>

          <div className="flex gap-10 pt-10">
            <button
              onClick={()=>handleActive1(bookId)}
              className={
              (  active === true)
                  ? "bg-[#50B1C9] text-white btn btn-outline px-10"
                  : "btn btn-outline"
              }
            >
              Read
            </button>
            <button
              onClick={()=>handleActive2(bookId) }
              className={
              (  active === false)
                  ? "bg-[#50B1C9] text-white btn btn-outline px-10"
                  : "btn btn-outline"
              }
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
