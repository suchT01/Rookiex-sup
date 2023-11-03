import '../css/styles.css';
import Rookiex from '../img/rookiex-logo.png'
import Rook from '../img/rook.jpg';

export default function Index(props){
    return(
        <>
            <header className="navbar">
                <div className="logo">
                    <img src={Rookiex} alt="rookiex-Logo" className="rookiexLogo" />
                </div>
                <nav className="nav-items">
                    <a href=""><span>Inicio</span></a>
                    <a href=""><span>Nosotros</span></a>
                    <a href=""><span>Iniciar Sesión</span></a>
                    <a href=""><span>Buscar</span></a>
                    <a href=""><span>Carrito</span></a>            
                </nav>
            </header>
            <main id="init">
                <div class="init-Img">
                    <img src={Rook} alt="rocaImage" className='rocaImage' />
                </div>
                <div class="init-Msg">
                    
                </div>
            </main>

        </>
    );
}