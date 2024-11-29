import {createBrowserRouter} from "react-router-dom";
import Root from "../components/root/Root";
import ErrorPage from "../components/errorpage/ErrorPage";
import Home from "../components/home/Home";
import ListedBooks from "../components/listedbooks/ListedBooks";
import PageToRead from "../components/pagetoread/PageToRead";
import BookDetails from "../components/bookDetailes/BookDetails";
import Admin from "../components/admin/Admin";
import AddBook from "../components/admin/AddBook";
import UpdateBookk from "../components/admin/UpdateBookk";
import PrivetRoutes from "./PrivetRoutes";
import Login from "../auth/Login";
import AdminPrivetRoute from "./AdminPrivetRoute";
import AdminLogin from "../components/admin/AdminLogin";
import Users from "../components/admin/Users";


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
            loader: ()=> fetch("http://localhost:5000/admin/books")
        },
        {
           path:"books/:bookId",
           element:<BookDetails/>,
           loader: ()=> fetch("http://localhost:5000/admin/books")
          
        },
        {
            path:"/listed-books",
            element:<PrivetRoutes><ListedBooks/></PrivetRoutes>,
            loader: ()=> fetch("http://localhost:5000/admin/books")
        },
        {
           path:"/pages-to-read",
           element:<PageToRead/> ,
           loader: ()=> fetch("http://localhost:5000/admin/books")
        }
        ,
        {
          path:"/login",
          element:<Login/>,
          loader: ()=> fetch('http://localhost:5000/users') 
        }
      ]
    },
    {
      path:"/admin",
      element:<AdminPrivetRoute><Admin/></AdminPrivetRoute>,
      loader: ()=> fetch('http://localhost:5000/admin/books')

    },
    {
      path:"/users",
      element:<AdminPrivetRoute><Users/></AdminPrivetRoute>,
      loader: ()=> fetch('http://localhost:5000/users') 
    },
    {
      path:"/admin/books",
      element:<AdminPrivetRoute><AddBook/></AdminPrivetRoute>
    },
    {
      path:"/admin/updateBooks/:id",
      element:<AdminPrivetRoute><UpdateBookk/></AdminPrivetRoute>,
      loader : ({params})=> fetch(`http://localhost:5000/admin/books/${params.id}`)
    },
    {
      path:"/admin/login",
      element:<AdminLogin/>,
      
    },
  ]);


  export { router}