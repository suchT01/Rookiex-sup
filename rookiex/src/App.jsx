
import './css/styles.css'
import { headerCatalogo } from './components/header'
import { renderCatalogo, renderNoResults } from './components/Catalogo'

const products = {
  imbdID: 1,
  title: "Llados Fitness"

}

function App() {

  

  

  return (

    <div>   
      <div>
        {headerCatalogo()}
        {renderCatalogo({products})}
      </div>
      
       
      
        
        
      



      

    </div>
    
    


  )
}

export default App

