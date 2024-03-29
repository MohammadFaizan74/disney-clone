 import React, { useState } from "react";
 import logo from '../assets/Images/logo.jpg'
 import {
   HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv} from 'react-icons/hi2';
   import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
 
 const Header=()=>{
   const [toggle,setToggle]=useState(false);
   const menu=[
      {
         name:'Home',
         icon:HiHome
      },
      {
         name:'SEARCH',
         icon:HiMagnifyingGlass
      },
      {
         name:'ORIGINALS',
         icon:HiStar
      },
      {
         name:'WATCH LIST',
         icon:HiPlus
      },
      {
         name:'MOVIES',
         icon:HiPlayCircle
      },
      {
         name:'SERIES',
         icon:HiTv
      }
   ]
    return<>
    
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-3  items-center">
      <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
      <div className=" hidden md:flex gap-8  ">
      {menu.map((item)=>(
         <HeaderItem name={item.name} Icons={item.icon}/>
      ))
      }
      </div>

      <div className=" flex md:hidden gap-5 ">
      {menu.map((item,index)=>(index<3&&(
         <HeaderItem name={''} Icons={item.icon}/>
      )))
      }
        <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
      
      <HeaderItem name={''} Icons={HiDotsVertical}/>
       {toggle?<div className="absolute mt-3 bg-[#e6dfdf] border-[1px] border-grey-700  p-3  px-5 py-4">
     {menu.map((item,index)=>(index<2&&(
         <HeaderItem name={item.name} Icons={item.icon}/>
      )))
      }

     </div>:null}
      </div>
      </div>
 </div>
      
         <img src="https://tse4.explicit.bing.net/th?id=OIP.zqpKQxEeK-ILz7WLp9qQegHaHa&pid=Api&P=0&h=180" 
         className="w-[40px] rounded-full" />
      
     
      
    </div>
    </>
 }
 export default  Header