import React, { useEffect } from 'react'
import '../styles/portafolio.css';
import Aos from "aos"
import "aos/dist/aos.css"
import logo from '../img/logo-happy-house-vector3.png';
import zorrilla from '../img/zorrilla.png';
import oso from '../img/oso.png';
import OsoPolar from '../img/oso-polar.png'
import inst1 from '../img/instalacion1.png';
import inst2 from '../img/instalacion2.png';
import inst3 from '../img/instalacion3.png';
import inst5 from '../img/instalacion5.png';
import inst6 from '../img/instalacion6.png';
import inst7 from '../img/instalacion7.png';
import inst8 from '../img/instalacion8.png';
import inst9 from '../img/instalacion9.png';





function Portafolio(){

   useEffect(() => {
      Aos.init({ duration: 2000});
      
   }, []);


   return(
      <section className="portafolio">
          <div className="wave6" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave7">
             <path d="M-24.60,26.94 C149.21,110.81 271.49,-49.99 500.22,40.75 L500.00,0.00 L0.00,0.00 Z" className="wave8"></path></svg>
         </div>

         <img src={logo} alt="" className="logo2" data-aos="zoom-in"></img>
         <img src={zorrilla} alt="" className="zorrilla" data-aos="fade-left"></img>
         <img src={oso} alt="" className="oso" data-aos="fade-left"></img>
          

          
         <div className="contenedor1">
            <div className="galeria-port">
                  <div className="imagen-port" data-aos="fade-down-right">
                     <img src={inst1} alt=""></img>
                      <div className="hover-galeria">
                         <img src={""} alt=""></img>
                      </div>
                  </div>

                  <div className="imagen-port" data-aos="fade-down">
                     <img src={inst2} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                     </div>
                  </div>

                   

                   <div className="imagen-port" data-aos="zoom-in-down">
                     <img src={inst3} alt=""></img>
                       <div className="hover-galeria">
                          <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                       </div>
                   </div>

                  <div className="imagen-port" data-aos="fade-down-left">
                    <img src={inst9} alt=""></img>
                      <div className="hover-galeria">
                        <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                     </div>
                  </div>

                  <div className="imagen-port" data-aos="fade-up-right">
                     <img src={inst5} alt=""></img>
                      <div className="hover-galeria">
                         <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                      </div>
                  </div>

                  <div className="imagen-port" data-aos="fade-up">
                     <img src={inst6} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                     </div>
                  </div>

                  <div className="imagen-port" data-aos="fade-left">
                      <img src={inst7} alt=""></img>
                         <div className="hover-galeria">
                            <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                         </div>
                  </div>

                  <div className="imagen-port" data-aos="fade-up-left">
                     <img src={inst8} alt=""></img>
                        <div className="hover-galeria">
                           <img src="img/iconmonstr-marketing-4-64.png" alt=""></img>
                       </div>
                  </div>
            </div>

            <img src={OsoPolar}  alt='imagen' className='oso-polar' data-aos="fade-left" />
         </div>
           
      </section>
       
   )
}
export default Portafolio;



