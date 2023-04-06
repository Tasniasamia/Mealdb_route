import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Food from './Component/Food/Food';
import Contact from './Component/Contact/Contact';
import FoodDetails from './Component/FoodDetails/FoodDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },{
        path:"/About",
        element:<About></About>,
      },
      {
        path:"/Food",
        element:<Food></Food>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
      },
      {
path:"/SingleFood/:id",
element:<FoodDetails></FoodDetails>,
loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
      },
      {
        path:"/Contact",
        element:<Contact></Contact>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
