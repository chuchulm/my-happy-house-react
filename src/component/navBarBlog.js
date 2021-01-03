import React from 'react'
import '../styles/navBarBlog.css'
import {Link} from "react-router-dom"
import Logo from '../img/logo-happy-house-vector3.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'


function NavBarBlog(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark  navBarColor1">
         
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
              <Link to="/personal" className='nav-link active colorLetras'>La casa</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className='nav-link active colorLetras'>Blog de Eventos</Link>
            </li>

           
            <li className="nav-item">
             
            </li>
          </ul>
          
          
        </div>
      </nav>

    )
}
export default NavBarBlog;