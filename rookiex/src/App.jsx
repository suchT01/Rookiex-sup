import { useState, useRef, useEffect } from 'react';
import { HeaderCatalogo } from './components/Header';
import { QuienesSomos } from './components/QuienesSomos';
import { Historia } from './components/Historia';
import { Objetivos } from './components/Objetivos';
import { Equipo } from './components/Equipo';
import { Footer } from './components/Footer';
import './css/landing.css';
import { Route, Routes } from 'react-router-dom';
import { renderCatalogo } from './components/Catalogo';


function App() {

  return (

    
      <div>

        <HeaderCatalogo></HeaderCatalogo>

        
        

        <div>
          <Routes>
            <Route path='/Catalogo' element={<renderCatalogo/>}></Route>
            <Route path='/' element={ <main><QuienesSomos></QuienesSomos><Historia></Historia><Objetivos></Objetivos><Equipo></Equipo></main> }></Route>
          </Routes>
        </div>
        
        
        <footer>
          <Footer></Footer>
        </footer>
      </div>

  )
}

export default App

