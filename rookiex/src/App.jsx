import { useState, useRef, useEffect } from 'react';
import { HeaderCatalogo } from './components/Header';
import { QuienesSomos } from './components/QuienesSomos';
import { Historia } from './components/Historia';
import { Objetivos } from './components/Objetivos';
import { Equipo } from './components/Equipo';
import { Footer } from './components/Footer';
import './css/landing.css';
import { Route, Routes } from 'react-router-dom';

import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { CartProvider } from './context/cart.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)
  return (

    
      <div>

        <HeaderCatalogo></HeaderCatalogo>

        <div>
          <Routes>
            <Route path='/Catalogo' element={ <CartProvider><Products products={filteredProducts} /></CartProvider> }></Route>
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

