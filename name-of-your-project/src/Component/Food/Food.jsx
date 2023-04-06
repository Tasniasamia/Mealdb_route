import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFood from '../SingleFood/SingleFood';

const Food = () => {
    const data=useLoaderData();
 const meals=data.meals;
 console.log(meals);
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
       {
        meals.map(index=><SingleFood key={index.idMeal
        }mealdata={index}></SingleFood>)
       }
        </div>
    );
};

export default Food;