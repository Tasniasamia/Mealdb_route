import React, { useState } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import Active from '../Active/Active';


const Navbar = () => {
    const [open,setOpen]=useState(false);
const navigation=useNavigation();
    return (
        <div>
        <div className='bg-red-300 text-white'>
        <div onClick={()=>setOpen(!open)}className="md:hidden ">
            {
open?<i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>

            }

        </div>
        <div className={`md:flex md:justify-center md:items-center md:static absolute bg-red-300  ${open?'top-6':'-top-60'}`}>
            
                
            
            <div className='mr-5'>
            <Active to="/" >Home</Active></div>
            <div className='mr-5'><Active to="/About">About</Active></div>
            <div className='mr-5'><Active to="/Food">Food</Active></div>
            <div className='mr-5'> <Active to="/Contact">Contact</Active></div>
        </div>
        </div>
        <div>{navigation.state === "loading"?"loading....":""}</div>
        <Outlet></Outlet>

        </div>
    );
};

export default Navbar;