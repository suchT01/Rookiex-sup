import '../css/styles.css';
import Rookiex from '../img/rookiex-logo.png'
import Rook from '../img/rook.jpg';

export default function Index(props){
    return(
        <>
            <header>

<div class="logo">
    <img src={Rookiex} alt="asd"/>
</div>
<nav class="navegacion clearfix">
    <ul>
        <li><a href="./login.html"><span>Inicio</span></a></li>
        <li><a href="./registrar-usuario.php"><span>Nosotros</span></a></li>
        <li><a href="#quienesSomos"></a><span>Iniciar Sesión</span></li>
        <li><a href="#caracteristicas"></a><span>Buscar</span></li>
        <li><a href="#caracteristicas"></a><span>Carrito</span></li>
    </ul>
</nav>


</header>

<main id="inicio">
<div class="imagen-inicio">
    <img src={Rook} alt=""/>
</div>
<div class="mensaje-inicial">
    <h1>Mantente en tu Prime. Alcanza tu PEAK</h1>
</div>

</main>

        </>
    );
}