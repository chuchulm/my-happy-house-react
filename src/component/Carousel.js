import React from 'react'
import '../styles/carousel.css'
import img1 from '../img/myHouse1.png'
import img2 from '../img/myHouse2.jpg'
import img3 from '../img/myHouse3.jpg'
import zorro from '../img/zorro.png'
import aeiou from '../img/oso.png'



function Carousel(){
    return(
     
     <>

      
  <div className='total'>

         <div className="wave1" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave2">
             <path d="M-24.60,26.94 C149.21,110.81 271.49,-49.99 500.22,40.75 L500.00,0.00 L0.00,0.00 Z" className="wave3"></path></svg>
         </div>

  <img src={zorro}  alt='imagen' className='zorro' width="460px" height="250px"/>

      <div >
       <h3 className="tituloCarousel">Ven a disfrutar<span className='VEN'> esta increible</span> Aventura</h3>
      </div>

        <div id="carouselExampleIndicators" className="carousel slide  carouselHouse1" data-ride="carousel">
           <ol className="carousel-indicators">
             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
           </ol>

           <div className="carousel-inner">
             <div className="carousel-item active">
               <img src={img1} className="carouselHouse" alt="..."/>
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

        {/* <img src={aeiou}  alt='imagen' className='aeiou' width="460px" height="250px"/> */}
    </div>
        </>
    )
}
export default Carousel;


   



   