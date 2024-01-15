import { useState, useRef, useEffect } from 'react';
import { HeaderCatalogo } from './components/Header';
import { QuienesSomos } from './components/QuienesSomos';
import { Historia } from './components/Historia';
import { Objetivos } from './components/Objetivos';
import { Equipo } from './components/Equipo';
import { Footer } from './components/Footer';
import './css/landing.css';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (

    
      <>

        <HeaderCatalogo></HeaderCatalogo>


        <main>
          <QuienesSomos></QuienesSomos>
          <Historia></Historia>
          <Objetivos></Objetivos>
          <Equipo></Equipo>
        </main>

        <div>
          <Routes>
            <Route path='/Catalogo'></Route>
            <Route path='/'></Route>
          </Routes>
        </div>
        
        
        <footer>
          <Footer></Footer>
        </footer>
      </>

  )
}

export default App

