import { useState } from 'react'

import './App.css'
import Watchlist from './Components/Watchlist'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import Pagination from './Components/Pagination'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Movies/>
            <Pagination/>
          </>
        }></Route>

        <Route path='/watchlist' element={
          <Watchlist/>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
