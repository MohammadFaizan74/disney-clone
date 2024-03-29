import React, { useEffect,useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const MoviesList = ({genereId}) => {
    const [movieList,setMovieList]=useState([])
 useEffect(()=>{

    getMovieByGenreId();
    
 },[])
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genereId).then(resp=>{
            //console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
 return (
    <div>
        {movieList.map((item,index)=>(
        <Moviescard/>))}

    </div>
  )
}

export default MoviesList