export const searchProduct= ({query,setResponsiveProducts}) => {
    
    
    fetch(`http://127.0.0.1:8000/api/v1${query}`)
    .then(res => res.json())
    .then(json => { setResponsiveProducts(json)
    })

    
    
}