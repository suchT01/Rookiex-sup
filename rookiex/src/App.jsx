import { useState } from 'react'
import './css/styles.css'
import { HeaderCatalogo } from './components/header'
import { renderCatalogo, renderNoResults } from './components/Catalogo'
import responseProducts from './mocks/with-results.json'

function useSearch(){
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    
    if(isFirstInput.current){
      isFirstInput.current = query == ''
      return
    }

    if (query == ''){
      setError('No se puede buscar una pelicula vacía')
      return
    }

    if (query.match(/^\d*$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (query.length < 3){
      setError('La busqueda debe contener al menos tres caracteres')
      return
    }

    setError(null)

  }, [query])

  return{query, setQuery, error}

}

function App() {

  const { query, setQuery, error} = useSearch()

  const [responseproducts, setResponsiveproducts] = useState([])
  const products = responseProducts.Search


  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(previousSearch.current == query) return
    if(query){
      searchProducts({query,setResponsiveproducts}) // Crear funcion searchProducts
      
    }
    else{
      setResponsiveproducts(withoutResults)
    }
    
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    
  }



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

