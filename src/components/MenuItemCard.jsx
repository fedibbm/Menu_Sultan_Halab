import React from 'react'

const MenuItemCard = ({item}) => {
  return (
    <div className='bg-lightBeige w-[95%] h-[128px] box-content rounded-md flex p-1 gap-2 shadow-lg border border-gray-400'>
        <div className='h-32 w-32 rounded-md flex-shrink-0 bg-cover bg-center' style={{backgroundImage:`url(${item.img})`}}></div>
        <div className='p-1 flex flex-col justify-between'>
            <h2 className='text-darkerCaramel text-lg pl-2 font-bold'>{item.name}</h2>
            <p className='text-xs h-[52px] text-darkerCaramel line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cons amet consectetur adipisicing elit. Consequatur cons amet consectetur adipisicing elit. Consequatur cons amet consectetur adipisicing elit. Consequatur cons amet consectetur adipisicing elit. Consequatur consequuntur quidem, </p>
            <p className='text-green-900 font-semibold text-lg text-end pr-2'>100dt</p>
        </div>
    </div>
  )
}

export default MenuItemCard