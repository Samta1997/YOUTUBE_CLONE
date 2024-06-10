import './App.css'
import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './AllRoutes'

function App() {
  
  const[leftSideBar, setLeftSideBar] = useState(false)
  return (
    <Router>
     <Navbar leftSideBar={leftSideBar} setLeftSideBar={setLeftSideBar}/>
     <AllRoutes leftSideBar={leftSideBar}/>
    </Router>
  )
}

export default App
