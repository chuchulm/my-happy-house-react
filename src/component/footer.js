import React from 'react'
import '../styles/footer.css'



function Footer(){
    return(
        
        <div className="footer">
            <div className="contenedor-footer">
                 <div className="content-foo">
                   <h4>Email</h4>
                   <p>infohappyhouse621@gmail.com</p>
                 </div>

                 <div className="content-foo">
                    <h4>Localizacion</h4>
                    <p>Bernardo de amaza 621, nuñoa</p>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13314.63317903065!2d-70.615247!3d-33.458208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf8c70e0e29b%3A0x5c915b150a79cd8f!2sBernardo%20de%20Amaza%20621%2C%20%C3%91u%C3%B1oa%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sve!4v1609778101156!5m2!1ses!2sve" className="mapa"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                 </div>

                 <div className="content-foo">
                     <h4>Telefono</h4>
                     <p>+56 9 45-832-173</p>
                 </div>

                 
             
             
            </div>
                 <h2 className="titulo-final">&copy; My Happy House</h2>
        </div>
    ) 
    
}
export default Footer;