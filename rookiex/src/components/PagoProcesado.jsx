import './PagoProcesado.css'

export function PagoProcesado () {
    return(
        <body className='body-pagos-procesados'>
            <div className="thank-you-container">
                <div className="thank-you-message">¡Gracias por tu compra!</div>
                <p>Tu pago ha sido procesado con éxito.</p>
                <button className="back-to-home" onclick="window.location.href='/';">Volver a la Página Principal</button>
            </div>
        </body>
    )
    
}