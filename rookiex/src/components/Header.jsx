export const HeaderCatalogo = () =>{
    return(

        <header className="header">
            <div className="logo">
                <img src="/src/img/rookiex-logo.png" alt="logo"></img>
            </div>
            
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Suplementos</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Buscar</a></li>
                    <li><a href="#">Carrito</a></li>
                </ul>
            </nav>

            <a href="#" className="btn"><button>Contacto</button></a>
            
        </header>
    )
}