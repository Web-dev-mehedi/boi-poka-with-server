import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBookk = () => {

    const book = useLoaderData();
    console.log(book)

   const {bookName,author,photoUrl,ratings,tags,publisher,yearOfPublishing,totalPages,category,bookReview,_id} = book || {}

    const handleUpdateBook = (event)=>{
        event.preventDefault();
        // 
        const form = event.target ;
        const bookName = form.bookName.value;
        const author = form.author.value;
        const photoUrl = form.photoUrl.value;
        const ratings = form.ratings.value;
        const tags = form.tags.value;
        const publisher = form.publisher.value;
        const yearOfPublishing = form.yearOfPublishing.value;
        const totalPages = form.totalPages.value;
        const category = form.category.value;
        const bookReview = form.bookReview.value;
        const updatedBook = {bookName,author,photoUrl,ratings,tags,publisher,yearOfPublishing,totalPages,category,bookReview}


        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Update it!"
        }).then((result) => {
          if (result.isConfirmed) {

            fetch(`http://localhost:5000/admin/books/${_id}`,{
              method: "PUT",
              headers : {
                 'content-type':  'application/json'
              },
               body: JSON.stringify(updatedBook)
             
             })
         .then( res => res.json())
         .then(data => {
             console.log(data)
              Swal.fire({
              title: "Updated!",
              text: "Your file has been Updated.",
              icon: "success"
            });
         })
           
          }
        });


      
    
      }
    //   
    return (
        <div className="container w-11/12 mx-auto py-20 px-20 bg-slate-400">
        <h1 className="text-3xl text-black font-semibold mb-8 text-center ">
          Update Book
        </h1>
  
        <form onSubmit={handleUpdateBook} className="w-8/12 mx-auto">
          <div className="flex justify-between items-start gap-8 flex-wrap w-full">
            <label className="form-control  w-full md:w-5/12 mx-auto capitalize">
              {" "}
              bookName
              <input
              defaultValue={bookName}
              name="bookName"
                type="text"
                placeholder="Enter Your Book Name"
                className="input input-bordered input-md "
              />
            </label>
            {/* another */}
            <label className="form-control w-full md:w-5/12 mx-auto  capitalize">
              {" "}
              author name
              <input
               defaultValue={author}
              name="author"
                type="text"
                placeholder="Enter Your Book author name"
                className="input input-bordered input-md "
              />
            </label>
            {/* another */}
            <label className="form-control w-full md:w-5/12 mx-auto capitalize">
              {" "}
              Photo Url
              <input
               defaultValue={photoUrl}
              name="photoUrl"
                type="text"
                placeholder="Enter Your Photo Url"
                className="input input-bordered input-md"
              />
            </label>
            {/* another */}
            <label className="form-control w-full md:w-5/12 mx-auto capitalize">
              {" "}
              Ratings
              <input
              defaultValue={ratings}
                name="ratings"
                type="text"
                placeholder="Enter Books Ratings"
                className="input input-bordered input-md "
              />
            </label>
            {/* another */}
            <label className="form-control w-full md:w-5/12 mx-auto capitalize">
              {" "}
              Tags
              <input
              defaultValue={tags}
              name="tags"
                type="text"
                placeholder="Enter Books Tags"
                className="input input-bordered input-md"
              />
            </label>
            {/* another */}
            <label className="form-control w-full md:w-5/12 mx-auto  capitalize">
              {" "}
              publisher
              <input
              defaultValue={publisher}
              name="publisher"
                type="text"
                placeholder="Enter book Publisher"
                className="input input-bordered input-md "
              />
            </label>
            {/* another */}
            <label className="form-control w-full md:w-5/12 mx-auto  capitalize">
              {" "}
              yearOfPublishing
              <input
              defaultValue={yearOfPublishing}
              name="yearOfPublishing"
                type="text"
                placeholder="Enter book YearOfPublishing"
                className="input input-bordered input-md "
              />
            </label>
            {/* another */}
            <label className="form-control w-full md:w-5/12 mx-auto capitalize">
              {" "}
              totalPages
              <input
              defaultValue={totalPages}
              name="totalPages"
                type="text"
                placeholder="Enter Book Total Pages"
                className="input input-bordered input-md "
              />
            </label>
            {/* another */}
            <label className="form-control w-full md:w-5/12 ml-7 capitalize">
              {" "}
              category
              <input
              defaultValue={category}
              name="category"
                type="text"
                placeholder="Enter Book Category"
                className="input input-bordered input-md"
              />
            </label>
          </div>
          <div className="py-7">
            <label className="form-control w-full md:w-11/12 mx-auto  capitalize">
              {" "}
              Book Review
              <textarea
              defaultValue={bookReview}
              name="bookReview"
                className="textarea textarea-bordered"
                placeholder="Enter Your Book short details"
              ></textarea>
            </label>
          </div>
  
          <div className="flex justify-center items-center">
            <input
              className="btn w-full md:w-11/12 text-center mx-6"
              type="submit"
              value="Update Book"
            />
          </div>
        </form>
      </div>
    );
};

export default UpdateBookk;