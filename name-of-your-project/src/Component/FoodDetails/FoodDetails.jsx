import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './FoodDetails.css'
const FoodDetails = () => {
    const navigate=useNavigate();
    function back(){
        navigate(-1);
    }
    const data=useLoaderData();
    const props=data.meals[0];
    
    return (
        <div className='md:flex md:justify-center md:items-center'>
            <div className='md:w-2/4 text-justify md:border-4'>
           <img src={props.strMealThumb} alt="food_item" style={{width:"100%"}}/> 
           <div className='p-4'>
           <p><span className='text-xl font-bold'>Food Name:</span> {props.strMeal}</p>
          <p><span className='text-xl  font-bold '>Serve:</span>{props.strTags}</p>
           <p><span className='text-xl font-bold '>Country type food:</span>{props.strArea}</p>
      <p>  <span className='text-xl  font-bold'>Catagory:</span>{props.strCategory}</p>
           <p className='py-4'>{props.strInstructions}</p></div>
           <p className='text-center'>
           <button onClick={back} className="p-3 bg-red-400 text-white">Go Back</button></p>
           </div>
           
        </div>
    );
};

export default FoodDetails;