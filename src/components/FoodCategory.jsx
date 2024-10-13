import React from 'react'

const FoodCategory = ({title, picSrc}) => {
  return (
    <div className='flex flex-col'>
        <img className="h-28 w-[45vw] md:w-[191.25px] rounded-md border border-gray-500" src={picSrc} />
        <p className='text-center text-lg font-semibold '>{title}</p>
    </div>
  )
}

export default FoodCategory