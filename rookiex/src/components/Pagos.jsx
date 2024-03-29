import './Pagos.css'
import {Link} from 'react-router-dom'

export function Pagos () {

    return(

        <body className='body-pagos'>
            <div className="payment-container">
                <h2>Pasarela de pago</h2>
                <form className="payment-form" action="" method="post">
                    <label htmlFor="card-number">Número de tarjeta:</label>
                    <input type="text" id="card-number" name="card-number" placeholder="Ingrese el número de tarjeta"/>

                    <label htmlFor="expiry-date">Fecha de Vencimiento:</label>
                    <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required/>

                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" placeholder="Ingrese el CVV" required/>

                    <button type="submit"><Link to="/PagosProcesados">Pagar</Link></button>
                </form>
            </div>
        </body>
          
    )
}
