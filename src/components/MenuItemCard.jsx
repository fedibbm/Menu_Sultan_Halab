import React from 'react'

const MenuItemCard = ({item}) => {
  return (
    <div className='bg-white w-[95%] h-[128px] box-content rounded-md flex p-1 gap-2 shadow-md'>
        <img className='h-32 w-32 rounded-md' src="https://placehold.co/600x400/png" alt="" />
        <div className='p-1 flex flex-col justify-between'>
            <h2 className='text-black text-lg font-bold'>{item.name}</h2>
            <p className='text-xs h-[52px] line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cons amet consectetur adipisicing elit. Consequatur cons amet consectetur adipisicing elit. Consequatur cons amet consectetur adipisicing elit. Consequatur cons amet consectetur adipisicing elit. Consequatur consequuntur quidem, </p>
            <p className='text-green-400 font-semibold text-lg text-end pr-2'>100dt</p>
        </div>
    </div>
  )
}

export default MenuItemCard