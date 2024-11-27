import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from "../components/root/Root";
import ErrorPage from "../components/errorpage/ErrorPage";
import Home from "../components/home/Home";
import ListedBooks from "../components/listedbooks/ListedBooks";
import PageToRead from "../components/pagetoread/PageToRead";
import BookDetails from "../components/bookDetailes/BookDetails";
import Admin from "../components/admin/Admin";
import AddBook from "../components/admin/AddBook";
import UpdateBookk from "../components/admin/UpdateBookk";


// 

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:"/",
            element:<Home/>,
            loader: ()=> fetch("/data/booksData.json")
        },
        {
           path:"books/:bookId",
           element:<BookDetails/>,
           loader: ()=> fetch("/data/booksData.json")
          
        },
        {
            path:"/listed-books",
            element:<ListedBooks/>,
            loader: ()=> fetch("/data/booksData.json")
        },
        {
           path:"/pages-to-read",
           element:<PageToRead/> ,
           loader: ()=> fetch("/data/booksData.json")
        }
        
      ]
    },
    {
      path:"/admin",
      element:<Admin/>,
      loader: ()=> fetch('http://localhost:5000/admin/books')

    },
    {
      path:"/admin/books",
      element:<AddBook/>
    },
    {
      path:"/admin/updateBooks/:id",
      element:<UpdateBookk/>,
      loader : ({params})=> fetch(`http://localhost:5000/admin/books/${params.id}`)
    }
  ]);


  export { router}