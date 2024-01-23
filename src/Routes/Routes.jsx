import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PasswordResetPage from "../Pages/Login/PasswordReset/PasswordReset";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
    {
      path:'/SignUp',
      element:<Register></Register>
  },
  {
    path:'/login',
    element:<Login></Login>
},
{
  path:'/password/forgot',
  element:<PasswordResetPage></PasswordResetPage>
},
{
  path:'/password/reset/:token',
  element:<PasswordResetPage></PasswordResetPage>
},
{
  path:'/product/:name',
  element:<ProductDetails></ProductDetails>
}
      ]
    },
  ]);