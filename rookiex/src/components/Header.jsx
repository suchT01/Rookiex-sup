import {Link} from 'react-router-dom';

import { Cart } from './Cart.jsx'
import { CartProvider } from '../context/cart.jsx'

export const HeaderCatalogo = () =>{
    return(

        <header className="header">
            <div className="logo">
                <img src="/src/img/rookiex-logo.png" alt="logo"></img>
            </div>
        
            <nav>
                
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="Catalogo">Suplementos</Link></li>
                    {/* <li><Link to="Buscar">Buscar</Link></li> */}
                    <li><Link to="Contacto">Contacto</Link></li>
                </ul>
            </nav>

            <div className="btn"></div> 

        </header>
        
    )
}