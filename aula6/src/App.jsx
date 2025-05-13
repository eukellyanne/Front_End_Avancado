import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Contato from './pages/Contato'
import Noticias from './pages/Noticias'
import Dpolgpd from './pages/DpoLgpd'
import Faculdade from './pages/Faculdade'
import Navbar from './components/Navbar'

const App = () => {
  return (

    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      <Route path='/'element={<Inicial />}/> 
      <Route path='/contato' element={<Contato />}/> 
      <Route path='/noticias' element={<Noticias />}/> 
      <Route path='/dpo-lgpd' element={<Dpolgpd />}/> 
      <Route path='/a-faculdade' element={<Faculdade />}/> 

    </Routes>
    </BrowserRouter>
   

    
  )
}

export default App