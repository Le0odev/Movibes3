import React from 'react'
import {BrowserRouter, Routes, Route }  from "react-router-dom"

import './App.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  Home  from './Pages/Home.jsx'
import  Movie  from './Pages/Movie.jsx'
import Search from './Pages/Search.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
        <Route path='/Movibes3' element={<Home/>} />
        <Route path='/Movibes3/movie/:id' element={<Movie />} />
        <Route path='/Movibes3/search' element={<Search/>} />
      </Route>
      </Routes>
    
    
    </BrowserRouter>
    
  </React.StrictMode>,
)
