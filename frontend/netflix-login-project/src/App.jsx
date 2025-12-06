import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import WelcomePage from './Components/WelcomePage'
import Home from './Components/Home'

import {BrowserRouter, Route, Routes , Navigate} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/in' element={<Login/>}></Route>
              <Route path='/welcomepage' element={<WelcomePage/>}></Route>
              <Route path='*' element={<Navigate to='/' replace />}></Route>
           </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
