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
                    <h4>Localización</h4>
                    <p>Bernardo de amaza 621, nuñoa</p>
                  
                 </div>

                 <div className="content-foo">
                     <h4>Teléfono</h4>
                     <p>+56 9 45-832-173</p>
                 </div>

                 
             
             
            </div>
                 <h2 className="titulo-final">&copy; My Happy House chile All Rights Reserved.</h2>
        </div>
    ) 
    
}
export default Footer;