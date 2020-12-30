import React from 'react'
import '../styles/navBar.css'
import {Link} from "react-router-dom"
import Logo from '../img/logo-happy-house-vector3.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'


function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark  navBarColor">
          <img src={Logo} alt='imagen'  width="150px" height="150px" className='logo-navBar'/>
        <button className="navbar-toggler color-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-center">
            <li className="nav-item active">
              <Link to="/" className='nav-link active colorLetras' >Inicio</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link colorLetras" href="#">Nosotros</a> */}
              <Link to="/personal" className='nav-link active colorLetras'>Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className='nav-link active colorLetras'>Blog de Eventos</Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/login" className='nav-link active colorLetras'>Login</Link>
            </li> */}
           
            <li className="nav-item">
             
            </li>
          </ul>
          <div className='d-flex flex-row justify-content-center'>
          <a href="https://www.facebook.com/myhappyhouse.cl" target="blank" title="Flaticon"><img src={facebook} alt='imagen'  width="30px" height="30px" className='redes'/></a>
          <a href="https://www.instagram.com/myhappyhouse.cl/" target="blank" title="Flaticon"><img src={instagram} alt='imagen'  width="30px" height="30px" className='redes'/></a>
          <a href="#" target="blank" title="Flaticon"><img src={whatsapp} alt='imagen'  width="30px" height="30px" className='redes1'/></a>
          </div>
          
        </div>
      </nav>

    )
}
export default NavBar;