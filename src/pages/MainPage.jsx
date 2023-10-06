import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card';
const MainPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{


        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setProducts(res.data))
        
        
    }, [])

  return (

    <div className='my-5 container d-flex flex-wrap justify-content-center justify-content-md-between gap-5 '>
        {products.map((product)=> <Card key={product.id} product={product}/>)}

    </div>

  )
}

export default MainPage