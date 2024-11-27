import React from 'react';

const AddBook = () => {
    const handleAddBook = (event)=>{
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
    
        const newAddedBook = {bookName,author,photoUrl,ratings,tags,publisher,yearOfPublishing,totalPages,category,bookReview}
        console.log(newAddedBook)
        fetch("http://localhost:5000/admin/books",{
             method: "POST",
             headers : {
                'content-type':  'application/json'
             },
              body: JSON.stringify(newAddedBook)
            
            })
        .then( res => res.json())
        .then(data => {
            console.log(data)
        })
    
      }
    
      return (
        <div className="container w-11/12 mx-auto py-20 px-20 bg-slate-400">
          <h1 className="text-3xl text-black font-semibold mb-8 text-center ">
            Add Book
          </h1>
    
          <form onSubmit={handleAddBook} className="w-8/12 mx-auto">
            <div className="flex justify-between items-start gap-8 flex-wrap w-full">
              <label className="form-control  w-full md:w-5/12 mx-auto capitalize">
                {" "}
                bookName
                <input
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
                value="Add Book"
              />
            </div>
          </form>
        </div>
      );
};

export default AddBook;