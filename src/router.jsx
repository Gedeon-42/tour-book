import { createBrowserRouter } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import App from "./App";
import Contact from "./components/pages/Contact";
import TourList from "./components/pages/TourList";
import Layout from "./components/Layout/Layout";
import Tour from "./components/pages/Tour";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import TourDetail from "./components/pages/TourDetail";
import Tourdashboard from "./components/Dashboard/Tours";
import Adminhome from "./components/Dashboard/Adminhome";
import Tour1 from "./components/Dashboard/Tours";
import Places from "./components/Dashboard/Places";
import Calendar from "./components/Dashboard/Calendar";
import Users from "./components/Dashboard/Users";
import EditUser from "./components/Dashboard/EditUser";
import DefaultLayout from "./components/Auth/DeafultLayout";

const router = createBrowserRouter([

{
    path:'/',
    element:<Layout/>,
    children:[
        {
            path:'/',
            element:<App/>
        },

    
       
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/tour',
            element:<Tour/>
        },
        {
            path:'/tour/:_id',
            element:<TourDetail/>
        },
    ]

},
{
    path:'/',
    element:<DefaultLayout/>,
    children:[
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        
    ]
},


   
{
    path:'/admin',
    element:<Dashboard/>,
    children:[
        {
            path:'/admin',
            element:<Adminhome/>
        },
        {
            path:'/admin/dashboard',
            element:<Adminhome/>
        },
        {
            path:'/admin/tour',
            element:<Tour1/>
        },
        {
            path:'/admin/places',
            element:<Places/>
        },
        {
            path:'/admin/calendar',
            element:<Calendar/>
        },
        {
            path:'/admin/users',
            element:<Users/>
        },
        {
            path:'/admin/user/edit',
            element:<EditUser/>
        }
    ]
}

 


])
export default router