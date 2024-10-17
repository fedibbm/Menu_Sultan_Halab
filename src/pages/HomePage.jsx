import React, { useEffect } from 'react'
import FoodCategory from '../components/FoodCategory'
import data from "../../data.json";
import Header from '../components/Header'

const HomePage = () => {
    useEffect(()=>{
        console.log(data);
    },[])
  return (
    <div className='flex flex-col items-center space-y-10'>
        <Header />
        <div className='grid grid-cols-2 w-full place-items-center gap-y-4 pb-20'>
            {data.map((category, index)=><FoodCategory key={index} title={category.title} picSrc={category.img} path={category.path} items={category.items} />)}       
        </div>
    </div>
  )
}

export default HomePage