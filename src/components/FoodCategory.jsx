import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodCategory = ({title, picSrc, path, items}) => {
  const navigate = useNavigate(); 
  const handleClick = ()=>{
      navigate(`/menu/${path}`,{
        state: {items},
      })
  }
  return (          
    <div className='flex flex-col cursor-pointer shadow-md rounded-md p-1 bg-[#DFCBA2]' onClick={handleClick}>
        <img className="h-28 w-[43vw] md:w-[181.25px] rounded-md border border-gray-500" src={picSrc} />
        <p className='text-center text-lg font-semibold p-2 text-[#6b0b0c]'>{title}</p>
    </div>
  )
}

export default FoodCategory