import React, { useEffect,useRef,useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import Moviescard from './Moviescard'
import {IoChevronBackOutline,IoChevronForwardOutline} from 'react-icons/io5'
import HrMovieCard from './HrMovieCard'


const MoviesList = ({genereId,index_}) => {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null)
 useEffect(()=>{

    getMovieByGenreId();
    
 },[])


 const getMovieByGenreId=()=>{
      GlobalApi.getMovieByGenreId(genereId).then(resp=>{
      setMovieList(resp.data.results)
    })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500
    }
 return (
    <div className='relative'>
    <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
    className={`text-[50px] text-white
      p-2 z-10 cursor-pointer 
       hidden md:block absolute
       ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
       <div ref={elementRef} className='flex  overflow-x-auto gao-8 scrollbar-none scroll-smoth pt-4 px-3 pb-4'></div>

    <div className='flex overflow-x-auto pt-5   px-3 gap-8 scrollbar-none  pb-5 '>
        {movieList.map((item,index)=>(
          <>
          {index_%3==0?<HrMovieCard movie={item}/>:<Moviescard movie={item} />}
           </> 
       // <Moviescard movie={item}
        ))}
         

    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}

export default MoviesList