export const renderCatalogo = ({products}) => {
    return(
        <ul className="products">
            
            {
                products.map(product => (
                  <li className="list-item" key={product.id}>
                    <img src={product.img} alt="" />
                    
                    
                  </li>
                  
                ))
              }
        </ul>
    )
}

export const renderNoResults = () =>{
    return(
        <p>No se encontraron peliculas para esta busqueda</p>
    )
}