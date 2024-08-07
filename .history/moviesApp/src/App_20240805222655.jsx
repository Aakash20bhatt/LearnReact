import { useState } from 'react'

import './App.css'
import Watchlist from './Components/Watchlist'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import Pagination from './Components/Pagination'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Movies
            watchList={watchList}
            addToWatchList={addToWatchList}
            removeFromWatchList={removeFromWatchList}
            />
          </>
        }></Route>

        <Route path='/watchlist' element={
          <Watchlist
          movies={watchList}
          addToWatchList={addToWatchList}
          removeFromWatchList={removeFromWatchList}          
          />
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
