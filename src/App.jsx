import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import PokemonListPage from './pages/PokemonListPage'
import PokemonDetailPage from './pages/PokemonDetailPage'
function App() {

  return (
    <>
    <Router>
      <NavBar links={[{label:"Lista",path:"/"}]}/>
      <Routes>
        <Route path='/' element = {<PokemonListPage/>} />
        <Route path='/pokemon/:name' element = {<PokemonDetailPage/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
