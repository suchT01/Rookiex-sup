
import './css/styles.css'
import { headerCatalogo } from './components/header'
import { quienesSomos } from './components/quienesSomos'

function App() {

  

  

  return (

    <div>
      {headerCatalogo()}
      
      <div>
        {quienesSomos()}
      </div>
      
    </div>
    
    


  )
}

export default App

