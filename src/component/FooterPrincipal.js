import React from 'react'
import '../styles/footerPrincipal.css'



function FooterPrincipal(){
    return(
        
        <div className="footerPrincipal">
            <div className="contenedor-footerPrincipal">
                 <div className="content-fooPrincipal">
                   <h4>Email</h4>
                   <p>infohappyhouse621@gmail.com</p>
                 </div>

                 <div className="content-fooPrincipal">
                    <h4>Localización</h4>
                    <p>Bernardo de amaza 621, nuñoa</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6582801390678!2d-70.61743558480046!3d-33.45820838077165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfcf1b485927%3A0x7d918edf312adf38!2sHappy%20House%20Sala%20Cuna%20y%20Jardin%20Infantil!5e0!3m2!1ses-419!2sve!4v1615403193632!5m2!1ses-419!2sve" className="mapaPrincipal" allowfullscreen="" loading="lazy"></iframe>
                 </div>

                 <div className="content-fooPrincipal">
                     <h4>Teléfono</h4>
                     <p>+56 9 45-832-173</p>
                 </div>

                 
             
             
            </div>
                 <h2 className="titulo-finalPrincipal">&copy; My Happy House chile All Rights Reserved.</h2>
        </div>
    ) 
    
}
export default FooterPrincipal;