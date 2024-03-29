import React from 'react'
import GenresList from '../Constant/GenresList'
import MoviesList from './MoviesList'

const GenreMoviesList = () => {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=4&&(
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-black font-bold'>{item.name}</h2>
                <MoviesList genereId={item.id}/>

                </div>
        ))}
    </div>
  )
}

export default GenreMoviesList