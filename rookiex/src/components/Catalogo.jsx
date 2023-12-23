export const renderCatalogo = ({products}) => {
    return(
        <ul className="products">
            
            {
                products.map(product => (
                  <li className="list-item" key={product.imdbID}>
                    <img src={product.Poster} alt="" />
                    <h3>{product.Title}</h3>
                    
                    
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