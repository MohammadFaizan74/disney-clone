import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMoviesList from './Components/GenreMoviesList'

function App() {
  

  return (
  <>
  <Header/>

  <Slider/>
 <ProductionHouse/>
 <GenreMoviesList/>

  </>
  )
}

export default App
