import { useState } from 'react'

import './App.css'
import Watchlist from './Components/Watchlist'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import Pagination from './Components/Pagination'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Movies/>
      <Pagination/>
      <Watchlist/>
    </>
  )
}

export default App
