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

    <div>
      {headerCatalogo()}

      <main>
        {
          hasproducts?(renderCatalogo({products}))
          :(renderNoResults())
        }
      </main>


    </div>
    
    


  )
}

export default App

