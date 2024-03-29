import React from 'react'
import disney from '../assets/Images/disney.png'
import pixar from '../assets/Images/pixar.png'
import starwar from '../assets/Images/starwar.png'
import marvel from '../assets/Images/marvel.png'
import nationalG from '../assets/Images/nationalG.png'

import disneyV from '../assets/Videos/disney.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import starwarsV from '../assets/Videos/starwars.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGeographicV from '../assets/Videos/nationalGeographicV.mp4'


const ProductionHouse = () => {
const ProductionHouseList=[
    {
        id:1,
        image:disney,
        video:disneyV
    },
    {
        id:2,
        image:marvel,
        video:marvelV
    },
    {
        id:3,
        image:pixar,
        vedio:pixarV
    },
    {
        id:4,
        image:starwar,
        vedio:starwarsV
    },
    {
        id:5,
        image:nationalG,
        video:nationalGeographicV
    },

]

  return (
    <div className='flex gap-2  md:*:gap-5   p-2 px-5 md:px-16 '>
        {ProductionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 translate-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
 
 
            <video src={item.video} autoPlay loop playsInline 
            className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'
            />
                
             <img src={item.image}  className='w-full z-[1] '/>
              </div>
        ))}
   </div>
  )
}

export default ProductionHouse