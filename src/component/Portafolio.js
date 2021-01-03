import React from 'react'
import '../styles/portafolio.css';
import logo from '../img/logo-happy-house-vector3.png';
import zorrilla from '../img/zorrilla.png';
import OsoPolar from '../img/oso-polar.png'
import inst1 from '../img/instalacion1.png';
import inst2 from '../img/instalacion2.png';
import inst3 from '../img/instalacion3.png';
// import inst4 from '../img/instalacion4.png';
import inst5 from '../img/instalacion5.png';
import inst6 from '../img/instalacion6.png';
import inst7 from '../img/instalacion7.png';
import inst8 from '../img/instalacion8.png';
import inst9 from '../img/instalacion9.png';





function Portafolio(){
   return(
      <section className="portafolio">
          <div className="wave6" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave7">
             <path d="M-24.60,26.94 C149.21,110.81 271.49,-49.99 500.22,40.75 L500.00,0.00 L0.00,0.00 Z" className="wave8"></path></svg>
         </div>

         <img src={logo} alt="" className="logo2"></img>
         <img src={zorrilla} alt="" className="zorrilla"></img>
             
        <div className="contenedor1">
         
            
               <div class="galeria-port">
               <div className="imagen-port">
                     <img src={inst1} alt=""></img>
                      <div className="hover-galeria">
                         <img src={""} alt=""></img>
                         <p></p>
                      </div>
                  </div>

                  <div className="imagen-port">
                     <img src={inst2} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                     </div>
                  </div>

                   

                   <div className="imagen-port">
                     <img src={inst3} alt=""></img>
                       <div className="hover-galeria">
                          <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                            <p></p>
                       </div>
                   </div>

                  <div className="imagen-port">
                    <img src={inst9} alt=""></img>
                      <div className="hover-galeria">
                        <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                          <p></p>
                     </div>
                  </div>

                  <div className="imagen-port">
                     <img src={inst5} alt=""></img>
                      <div className="hover-galeria">
                         <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                         <p></p>
                      </div>
                  </div>

                  <div className="imagen-port">
                     <img src={inst6} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                     </div>
                  </div>

                  <div className="imagen-port">
                      <img src={inst7} alt=""></img>
                         <div className="hover-galeria">
                            <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                         </div>
                  </div>

                  <div className="imagen-port">
                     <img src={inst8} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                           <p></p>
                       </div>
                  </div>
            </div>

            <img src={OsoPolar}  alt='imagen' className='oso-polar' />
      </div>




      
        
</section>




      

      
       
    )
}
export default Portafolio;





/*

<Card
hoverable
style={{ width: 600 }}
cover={<img alt="example" src={Bandana1} alt="logo" />}>
<Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
</Card>




</section>


       <section class="about-services">
           <div class="contenedor">
             <h2 class="Nuestros servicios"></h2>
             <div class="servicio-cont">

               <div class="servicio-ind">
                 <img src="img/ilustracion1.png" alt="">
                 <h3>Name</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore?</p>

               </div>
               <div class="servicio-ind">
                <img src="img/ilustracion2.png" alt="">
                <h3>Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore?</p>
                
              </div>
              <div class="servicio-ind">
                <img src="img/ilustracion3.png" alt="">
                <h3>Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore?</p>
                
              </div>
             </div>
           </div>
       </section>

       */