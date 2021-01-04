import React from 'react'
import '../styles/lacasa.css';
import NavBarBlog from '../component/navBarBlog'
import IconoWhatsapp from './iconoWhatsapp'
import { SRLWrapper } from "simple-react-lightbox";
import casa1 from '../img/casa1.jpeg';
import casa2 from '../img/casa2.jpeg';
import casa3 from '../img/casa3.jpeg';
import casa4 from '../img/casa4.jpeg';
import casa5 from '../img/casa5.jpeg';
import casa6 from '../img/casa6.jpeg';
import casa7 from '../img/casa7.jpeg';
import casa8 from '../img/casa8.jpeg';
import casa9 from '../img/casa9.jpeg';
import casa10 from '../img/casa10.jpeg';
import casa11 from '../img/casa11.jpeg';
import casa12 from '../img/casa12.jpeg';
import casa13 from '../img/casa13.jpeg';
import casa14 from '../img/casa14.jpeg';
import casa15 from '../img/casa15.jpeg';







function Lacasa(){

    const imagen  = [ casa1, casa2, casa3, casa4, casa5, casa6, casa7, casa8, casa9, casa10, casa11, casa12,
                      casa13, casa14, casa15 ]

    return(
        <>
        
          <NavBarBlog/>
          <IconoWhatsapp/>
         
            <div className="casa">
                <SRLWrapper>
                    <div className='card12'>
                        {imagen.map( ( img, index  )=> {
                            return(
                        
                                <div className=" card123" key= { index } >
                                   <img src= { img } className="card-img-top imgcard" alt= 'myhappyhouse'  />
                                </div>
                            )
                            
                        })}
                    </div>
                </SRLWrapper>
            </div>
       
            
        </> 
    )
}
export default Lacasa;