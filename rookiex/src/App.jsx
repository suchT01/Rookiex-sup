import { useState, useRef, useEffect } from 'react';
import { HeaderCatalogo } from './components/Header';
import { QuienesSomos } from './components/QuienesSomos';
import { Historia } from './components/Historia';
import { Objetivos } from './components/Objetivos';
import { Equipo } from './components/Equipo';
import { Footer } from './components/Footer';
import { Pagos } from './components/Pagos';

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

        

        <div>
          <Routes>
  
            <Route path='/Catalogo' element={ <><HeaderCatalogo></HeaderCatalogo> <CartProvider> <Cart /> <Products products={filteredProducts} /></CartProvider> <Footer></Footer> </>}></Route>
            <Route path='/Pagos' element={ <Pagos/> } ></Route>
            <Route path='/' element={ <><HeaderCatalogo></HeaderCatalogo> <main><QuienesSomos></QuienesSomos><Historia></Historia><Objetivos></Objetivos><Equipo></Equipo></main><Footer></Footer> </> }></Route>
          </Routes>
        </div>
        
        
        
      </div>

  )
}

export default App

