import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loadGif from '../images/Load.gif'


function ProductItemPage() {


    const {id} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
    const [stars, setStars] = useState(0)


    useEffect(() => {
        setLoad(true)
        fetch('https://fakestoreapi.com/products/'+id)
            .then(res => {
                if (res.status === 200){
                    return res.json()
                } else {
                    setError(true)
                    setTimeout(() => {
                        navigate('/products/')
                    }, 3000)
                }
            })
            .then(data => {
                setProduct(data)
            })
            .finally(() => setLoad(false))
    }, [])


    function starsFunk(rate){
        Math.floop(rate)
    }



    return (
       <div className="content" style={{gap: '15px', flexDirection: 'column', alignItems: 'center'}}>
            {load ? 
                <img width={40} src={loadGif}/> :

                error ? <h2>Данного продукта не существует</h2> 
                :
                <>
                    <h1>{product.title}</h1>
                    <img width={250} src={product.image}/>
                    <p>{product.description}</p>
                    <p>Price: {product.price}$</p>
                    {product.rating?.[0]}
                    <span class="fa fa-star active"></span>
                    <span class="fa fa-star"></span>  
                    <button onClick={() => navigate(-1)}>Назад</button>
                </>
            }  
        </div>
    );
    
  }
  
  export default ProductItemPage;