import React, { useEffect } from 'react'
import '../styles/portafolio.css';
import Aos from "aos"
import "aos/dist/aos.css"
import logo from '../img/logo-happy-house-vector3.png';
import zorrilla from '../img/zorrilla.png';
import oso from '../img/oso.png';
import OsoPolar from '../img/oso-polar_opt.png'
import inst1 from '../img/instalacion1_opt.png';
import inst2 from '../img/instalacion2_opt.png';
import inst3 from '../img/instalacion3_opt.png';
import inst8 from '../img/instalacion8_opt.png';
import happy1 from '../img/happy-1.jpeg';
import happy2 from '../img/happy-2.jpeg';
import happy4 from '../img/happy-4.jpeg';
import happy5 from '../img/happy-5.jpeg';





function Portafolio(){

   useEffect(() => {
      Aos.init({ duration: 2000});
      
   }, []);


   return(
      <section className="portafolio">
          <div className="wave6" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="mr-auto wave7">
             <path d="M-24.60,26.94 C149.21,110.81 271.49,-49.99 500.22,40.75 L500.00,0.00 L0.00,0.00 Z" className="wave8"></path></svg>
         </div>

         <img src={logo} alt="myhappyhousechile" className="logo2" ></img>
         <img src={zorrilla} alt="myhappyhousechile" className="zorrilla" ></img>
         <img src={oso} alt="myhappyhousechile" className="oso" ></img>
          

          
         <div className="contenedor1">
            <div className="galeria-port">
                  <div className="imagen-port" data-aos="fade-down-right">
                     <img src={happy5} alt="myhappyhousechile"></img>
                  </div>

                  <div className="imagen-port" data-aos="fade-down">
                     <img src={inst2} alt="myhappyhousechile"></img>
                  </div>

                   

                   <div className="imagen-port" data-aos="zoom-in-down">
                     <img src={happy2} alt="myhappyhousechile"></img>
                   </div>

                  <div className="imagen-port" data-aos="fade-down-left">
                    <img src={inst3} alt="myhappyhousechile"></img>
                  </div>

                  <div className="imagen-port" data-aos="fade-up-right">
                     <img src={inst1} alt="myhappyhousechile"></img>
                  </div>

                  <div className="imagen-port" data-aos="fade-up">
                     <img src={happy4} alt="myhappyhousechile"></img>
                  </div>

                  <div className="imagen-port" data-aos="fade-left">
                      <img src={inst8} alt="myhappyhousechile"></img>
                  </div>

                  <div className="imagen-port" data-aos="fade-up-left">
                     <img src={happy1} alt="myhappyhousechile"></img>
                  </div>
            </div>

            <img src={OsoPolar}  alt="myhappyhousechile" className='oso-polar' data-aos="fade-left" />
         </div>
           
      </section>
       
   )
}
export default Portafolio;



// data-aos="fade-left"
// data-aos="fade-left"