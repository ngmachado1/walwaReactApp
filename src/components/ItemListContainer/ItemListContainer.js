import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard';

import './ItemListContainer.css'

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const url = 'https://run.mocky.io/v3/3a2f08c7-f754-4be0-add0-888612a04624';

  const getProducts = async () => {
    
      await fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      
  }
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <section className="container-products mt-120">
        {
          products.length ?
            products.map(product => {
              return (
                  <ProductCard product={product} />
              )
            })
            : <p>Cargando Productos...</p>
        }
      </section>
    </>
  )
}

export default ItemListContainer