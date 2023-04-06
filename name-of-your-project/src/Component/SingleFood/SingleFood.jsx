import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleFood = (props) => {
    const navigates=useNavigate();
    function handler(){
        navigates(`/SingleFood/${mealdec.idMeal}`);
    }
    const mealdec=props.mealdata;
    return (
        <div>
            <img src={mealdec.strMealThumb} alt="Food_item" />
            <h4 className='py-3'><span className='text-xl'>Food Name:</span> <span className='text-2xl font-bold text-red-950'>{mealdec.strMeal
}</span></h4>
<p className='bg-slate-700 text-yellow-50 text-center p-3 text-xl'>
    <Link to={`/SingleFood/${mealdec.idMeal}`}> Show details</Link></p>
    {/* <p className='bg-red-300 text-yellow-50 text-center p-3 text-xl'>
    <span onClick={handler}> Show details</span></p> */}
        </div>
    );
};

export default SingleFood;