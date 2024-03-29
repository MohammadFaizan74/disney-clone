import React, { useEffect, useState ,useRef} from 'react'
import GlobalApi from '../Services/GlobalApi'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi2'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const Slider = () => {
  const[movieList,setMovieList]=useState([])
   const elementRef=useRef();
   const screenWidth=window.innerWidth
    
  
  useEffect(()=>{
        getTrendingMovies();

    },[])

const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }
     const silderRight=(element)=>{
      element.scrollLeft+=screenWidth-110
     }
     const silderLeft=(element)=>{
      element.scrollLeft-=screenWidth-110
     }
  return (
    <div>
      <HiChevronLeft className= 'hidden md:block text-black text-[30px]  absolute mx-8 mt-[150px] cursor-pointer' 
      onClick={()=>silderLeft(elementRef.current)}/>
      <HiChevronRight className= 'hidden md:block text-black text-[30px]  absolute mx-8 mt-[150px] cursor-pointer right-0'
            onClick={()=>silderRight(elementRef.current)}/>
   
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth  ' ref={elementRef}>
      {movieList.map((item,index)=>(
        <img  src={IMAGE_BASE_URL+item.backdrop_path} 
        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-grey-400 translate-all duration-100 ease-in ' />
      ))}
      
    </div>
    </div>
  )
}

export default Slider