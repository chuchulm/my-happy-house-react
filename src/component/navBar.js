import React, { useEffect } from 'react'
import '../styles/navBar.css'
import {Link} from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import Logo from '../img/logo-fondo-azul.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'


function NavBar(){

  useEffect(() => {
    Aos.init({ duration: 2000});
    
  }, []);

    return(


      
      
        <nav className="navbar navbar-expand-lg navbar-dark  navBarColor">
          <img src={Logo} alt='imagen' className='logo-navBar animate__backInUp'  data-aos="fade-right"/>
        <button className="navbar-toggler color-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-center" data-aos="flip-up">
            
            <li className="nav-item active">
              <Link to="/" className='nav-link active colorLetras' >Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/lacasa" className='nav-link active colorLetras'> La casita</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className='nav-link active colorLetras'>Blog de Eventos</Link>
            </li>

            
           
            <li className="nav-item">
             
            </li>
          </ul>
          <div className='d-flex flex-row justify-content-center' data-aos="fade-left">
          <a href="https://www.facebook.com/myhappyhouse.cl" target="blank" title="Flaticon"><img src={facebook} alt='imagen'  width="30px" height="30px" className='redes'/></a>
          <a href="https://www.instagram.com/myhappyhouse.cl/" target="blank" title="Flaticon"><img src={instagram} alt='imagen'  width="30px" height="30px" className='redes'/></a>
          <a href="https://api.whatsapp.com/send?phone=+56945832173&text=Bienvenidos%20a%20My%20Happy%20House%20estamos%20para%20ayudarte" target="blank" title="Flaticon"><img src={whatsapp} alt='imagen'  width="30px" height="30px" className='redes1'/></a>
          </div>
          
        </div>
      </nav>
    
    )
}
export default NavBar;