
import {  Outlet } from 'react-router-dom'
import { Navbar } from './Components/Navbar'

import './index.css'
import './App.css'

function App() {
  

  return (
    <div className='app'>
      <Navbar />
      <Outlet />


    </div>
    

    
  )
}

export default App
