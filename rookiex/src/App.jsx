import { useState } from 'react'
import './css/styles.css'
import { HeaderCatalogo } from './components/header'
import { renderCatalogo, renderNoResults } from './components/Catalogo'
import responseProducts from './mocks/with-results.json'



function App() {

  const [responseproducts, setResponsiveproducts] = useState([])
  const products = responseProducts.Search


  const hasproducts = products?.length >0

  return (

    
      

      <main>
        <div className='rock-image'>
          <img src="src/img/rook.jpg" alt="" />
        </div>
        <div className="opacidad"></div>
        
        
        
        <HeaderCatalogo></HeaderCatalogo>
        <nav>
          <ul className='nav-bar'>
            <li><button className='button'>Proteina</button></li>
            <li><button className='button'>Pre-Entreno</button></li>
            <li><button className='button'>Creatina</button></li>
            <li><button className='button'>Otros</button></li>            
          </ul>
        </nav>
        <form className='form' >
            <input name='query' placeholder='Muscle Tech, My Protein...' type="text" />
            {/* <input type="checkbox" onChange={handleSort} checked={sort} /> */}
            <button type='submit'>buscar</button>
          </form>
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

