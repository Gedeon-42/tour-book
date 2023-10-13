import { createBrowserRouter } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import App from "./App";
import Contact from "./components/pages/Contact";
import TourList from "./components/pages/TourList";
import Layout from "./components/Layout/Layout";
import Tour from "./components/pages/Tour";

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
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },{
            path:'/tourList',
            element:<TourList/>
        },
        {
            path:'/tour',
            element:<Tour/>
        },
    ]

},

 


])
export default router