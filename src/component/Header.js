import React from 'react'
import '../styles/Header.css'
import imagenHeader from '../img/imagenHeader2-sol_opt.jpg'
import nubeFondo from '../img/nubeFondo.png'
import NavBar from './navBar'



function Header() {
    return(
        <>
        <NavBar/>
        <div className='header1'>
             <img src={imagenHeader} alt='myhappyhousechile'   className='imgPrincipal'/>
             <img src={nubeFondo}  alt='myhappyhousechile' className='nube' width="260px" height="150px"/>
             <img src={nubeFondo}  alt='myhappyhousechile' className='nube1' width="260px" height="150px"/>
        </div>
       </>
    )
}
export default Header;