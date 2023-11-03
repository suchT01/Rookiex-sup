export const renderCatalogo = ({products}) => {
    return(
        <ul>
            {
                
                  <li className="movie" key={products.imdbID}>
                    {/* <img src={product.Poster} alt="" /> */}
                    <h3>{products.title}</h3>
                  </li>
                  
                
              }
        </ul>
    )
}

export const renderNoResults = () =>{
    return(
        <p>No se encontraron peliculas para esta busqueda</p>
    )
}