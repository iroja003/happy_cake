import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='nav nav-brand align-items-center bg-danger gap-2 p-2 mb-3'>
      <div>
         <Link to="/" className="text-decoration-none text-white"> 
            🏠 Home
         </Link>
         <Link to="/contacto" className="text-decoration-none text-white">
            📒 Contacto
         </Link>
         </div>
         <Link to="#" className="text-decoration-none text-white">
         <a className="navbar-brand text-white align-right"> Happy Cake 🍰</a>
         </Link>
      </nav>
    </>
  )
}

export default Navbar