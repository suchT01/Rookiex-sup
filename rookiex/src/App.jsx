import { headerCatalogo } from "./components/header"
import '.././../System/src/css/styles.css'


function App() {

  

  

  return (
    
    <div className='page'>
      {headerCatalogo()}
      <header>
        <h1>Buscar de peliculas</h1>
        
      </header>
      {/* <main>
        {
          hasMovies
          ?(
            renderMovies({movies})
          ):(
            renderNoResults()
          )
        }
      </main> */}
    </div>
  )
}

export default App

