import { useState, useRef, useEffect } from 'react';
import { HeaderCatalogo } from './components/Header';
import { QuienesSomos } from './components/QuienesSomos';
import { Historia } from './components/Historia';
import { Objetivos } from './components/Objetivos';
import { Equipo } from './components/Equipo';
import { Footer } from './components/Footer';
import './css/landing.css';



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

        <footer>
          <Footer></Footer>
        </footer>
        


      </>

  )
}

export default App

