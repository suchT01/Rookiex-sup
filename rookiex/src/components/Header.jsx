import '../js/jquery'
import '../js/jquery.lettering'
import '../js/scripts'
export const HeaderCatalogo = () =>{
    return(
        <header>

            <div className="logo">
                <img src="src/img/rookiex-logo.png" alt="asd"></img>
            </div>
            <h2 className='titulo'>ALCANZA TU MAXIMO POTENCIAL</h2>
            <nav>
                <ul className='nav-bar'>
                    <li><button className='button'>Proteina</button></li>
                    <li><button className='button'>Pre-Entreno</button></li>
                    <li><button className='button'>Creatina</button></li>
                    <li><button className='button'>Otros</button></li>            
                </ul>
            </nav>

        </header>
    )
}