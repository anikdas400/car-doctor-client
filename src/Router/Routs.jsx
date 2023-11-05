import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../SignUp/Signup";
import Checkout from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signup",
          element:<Signup></Signup>
        },
        {
          path:"checkout/:id",
          element:<PrivateRout><Checkout></Checkout></PrivateRout>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
          
        },
        {
          path:"/bookings",
          element:<PrivateRout><Bookings></Bookings></PrivateRout>
        }
      ]
    },
  ]);

  export default router