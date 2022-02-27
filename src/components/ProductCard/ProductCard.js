import React from 'react'

import './productCard.css'

const ProductCard = ({product}) => {
  return (
    <article className='product-card'>
        <div className='product-card__img'>
            <img src={product.image} alt="" />
        </div>
        <div className='product-card__detail'>
            <h3>{product.name}</h3>
            <span>{product.price} x gr</span>
        </div>

    </article>
  )
}

export default ProductCard