import {Link} from 'react-router-dom';

export const HeaderCatalogo = () =>{
    return(

        <header className="header">
            <div className="logo">
                <img src="/src/img/rookiex-logo.png" alt="logo"></img>
            </div>
        
            <nav>
                
                <ul className="nav-links">
                    <li><Link to="Catalogo">Suplementos</Link></li>
                    <li><Link to="Accesorios">Accesorios</Link></li>
                    <li><Link to="Buscar">Buscar</Link></li>
                    <li><Link to="Carrito">Carrito</Link></li>
                </ul>
            </nav>

            <a href="#" className="btn"><button>Contacto</button></a>

        </header>
        
    )
}