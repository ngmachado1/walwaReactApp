import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
function ShoppingCart({ qty = 0 }) {
  return (
    <>
      <div className="carritoDeCompras">
        <MdShoppingBasket className='cart' />
        <div className="count-circle">{qty}</div>
      </div>
    </>
  );

}

export default ShoppingCart