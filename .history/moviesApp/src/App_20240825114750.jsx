import { useState } from 'react'

import './App.css'
import Watchlist from './Components/Watchlist'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieContext from './Contexts/MovieContext'
import PaginationContext from './Contexts/PaginationContext'
import MovieDetails from './Components/MovieDetails'

function App() {
  const [watchList,setWatchList] = useState(
    JSON.parse(localStorage.getItem('watchList'))||[]
  );

  const addToWatchList = (movieToAdd)=>{
    const newWatchList = [...watchList,movieToAdd]
    setWatchList(newWatchList);
  }

  const removeFromWatchList = (movieToRemove)=>{
      const filteredWatchList = watchList.filter((movieObj) => movieObj.id !== movieToRemove.id);
      setWatchList(filteredWatchList);
  }


  return (
    <BrowserRouter>
      <Navbar/>
        <MovieContext.Provider value = {{watchList,addToWatchList,removeFromWatchList,setWatchList}}>
          <Routes>
            <Route path='/' element={
              <>
                <Banner/>
                <Movies/>
                {/* <PaginationContext.Provider value = {{pageNo,handleNext,handlePrev}}>
                  <Movies/>
                </PaginationContext.Provider> */}
              </>
            }></Route>

            <Route path='/:title/:id' element={
              <MovieDetails/>
            }>
            </Route>

            <Route path='/watchlist' element={
              <Watchlist     
              />
            }></Route>
          </Routes>
        </MovieContext.Provider>
    </BrowserRouter>
  )
}

export default App
