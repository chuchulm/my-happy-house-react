import React, { useEffect } from 'react'
import '../styles/carousel.css'
import Aos from "aos"
import "aos/dist/aos.css"
import img2 from '../img/myHouse2.jpg'
import img3 from '../img/cambioFoto.jpeg'
import casa8 from '../img/casa8.jpeg';
import zorro from '../img/zorro.png'




function Carousel(){

  useEffect(() => {
    Aos.init({ duration: 2000});
    
  }, []);

    return(
     
     <>

      
  <div className='total'>

         <div className="wave1" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave2">
             <path d="M-24.60,26.94 C149.21,110.81 271.49,-49.99 500.22,40.75 L500.00,0.00 L0.00,0.00 Z" className="wave3"></path></svg>
         </div>

             <img src={zorro}  alt='imagen' className='zorro' width="460px" height="250px" data-aos="fade-up"/>

      <div data-aos="fade-right"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine">
       <h3 className="tituloCarousel">Ven a disfrutar<span className='VEN'> esta increible</span> Aventura</h3>
      </div>

        <div id="carouselExampleIndicators" className="carousel slide  carouselHouse1" data-ride="carousel" data-aos="fade-left">
           <ol className="carousel-indicators">
             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
           </ol>

           <div className="carousel-inner">
             <div className="carousel-item active">
               <img src={casa8} className="carouselHouse" alt="..."/>
             </div>
             <div className="carousel-item">
               <img src={img2} className="carouselHouse" alt="..."/>
             </div>
             <div className="carousel-item">
               <img src={img3} className="carouselHouse" alt="..."/>
             </div>
           </div>

           <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="sr-only">Previous</span>
           </a>
           <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="sr-only">Next</span>
           </a>
        </div>
    </div>
        </>
    )
}
export default Carousel;


   



   