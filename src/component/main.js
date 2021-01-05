import React, { useEffect } from 'react'
import '../styles/main.css';
import Aos from "aos"
import "aos/dist/aos.css"
import jirafa from '../img/jirafa.png'
import video from '../img/videoHappyHouse.mp4';





function Main(){

    useEffect(() => {
        Aos.init({ duration: 2000});
        
      }, []);


    return(
        
        
        

        <div className="container-fuid contenedor">
            <div className="row">
                <div className="col-sm-12 col-md-12 -pt-6 contenido-texto" >
                   <h3 data-aos="zoom-in-down" className="">My <span className='happy'>Happy</span> House</h3>
                </div>
    
                <div className="col-sm-12 col-md-6 contenido-textos" data-aos="zoom-in-right">
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                    
                </div>
                <div className="col-sm-12 col-md-6 " data-aos="fade-left">
                    <video className="video-about-us" controls autoPlay>
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
            </div>
           
        <img src={jirafa}  alt='imagen' className='jirafa' width="460px" height="250px" data-aos="fade-up"/> 

        </div>
                

    
                  
    )
}
export default Main;
