export const renderCatalogo = ({products}) => {
    return(
        <ul className="products">
            <img src="" alt="" />
            {
                products.map(product => (
                  <li className="product" key={product.imdbID}>
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