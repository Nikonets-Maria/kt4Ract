
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePge(){

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return(
        <div className="content" style={{gap: '15px', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Product List Page</h1>
        <ol className="productlist">
            {products.map(elem => 
                <Link to={'/products/'+elem.id} key={elem.id}>
                    <li className="productitem">
                        {elem.title}
                        <img width={150} src={elem.image}/>
                        <p>Price: {elem.price}$</p>
                        <span class="fa fa-star active"></span>
                        <span class="fa fa-star"></span>  
                    </li>
                </Link>
            )}
        </ol>
</div>
    )
}
export default HomePge;