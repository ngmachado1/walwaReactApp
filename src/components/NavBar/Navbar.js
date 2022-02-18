import React from 'react'
import logo from '../../assets/images/logo_walwa-02.png'
import './NavBar.css'
import ShoppingCart from './ShoppingCart'
const Navbar = () => {
  return (
    <>
    <div className='container-fluid'>
      <nav>
        <div className='brand'>
          <img className="header-logo" src={logo} alt="Walwa Tienda natural" />
        </div>
        <div className="menu">
          <div className="linea1"></div>
          <div className="linea2"></div>
          <div className="linea3"></div>
        </div>
        <div className="links-container">
          <ul className="link-items">
            <li className="contact contacto">Alimentos</li>
            <li>Estetica</li>
            <li>Ofertas</li>
            <li>Contacto</li>
          </ul>
        </div>
        <ShoppingCart />
      </nav>
      </div>
    </>
  )
}

export default Navbar