import { useState } from 'react'
import './css/styles.css'
import { headerCatalogo } from './components/header'
import { renderCatalogo, renderNoResults } from './components/Catalogo'
import responseProducts from './mocks/with-results.json'



function App() {

  const [responseproducts, setResponsiveproducts] = useState([])
  const products = responseProducts.Search


  const hasproducts = products?.length >0

  return (

    
      

      <main>
        {headerCatalogo()}
        <section className='products'>
        {
          hasproducts?(renderCatalogo({products}))
          :(renderNoResults())
        }
        </section>
        
      </main>


    
    
    


  )
}

export default App

