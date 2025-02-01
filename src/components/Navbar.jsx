import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>Odisha <span>Unveiled</span></Link>
      <ul className='navbar-elemnets'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/guides">Guides</Link></li>
        <li><Link to="/accomodation">Accomodation</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/collab">Collab</Link></li>
      </ul>
      <button className='Login-button' type='button'>Login</button>
    </nav>
  )
}

export default Navbar
