import React, { useContext } from 'react'
import { BasketContext } from '../context/basketContexts';

const Card = ({product}) => {

const context=useContext(BasketContext)

  //  console.log(context.lenght);

  return (

    <div className='card py-2' style={{width:'250px'}}>
        <div className="d-flex justify-content-center border">
            <img src={product.image} height={'100px'} />
        </div>
        <div className='card-body d-flex flex-column justify-content-between ' >
            <h4>{product.title}</h4>
            <p>{product.description.slice(0,30)+'...'}</p>
            <p className='text-success'>${product.price}</p>
            <p>{product.category}</p>
            
            <button onClick={()=>context.addToBasket(product)} className=' btn btn-primary w-100' >Sepete Ekle</button>
            
            
        </div>
    </div>
  )
}

export default Card