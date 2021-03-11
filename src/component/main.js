import React, { useEffect } from 'react'
import '../styles/main.css';
import Aos from "aos"
import "aos/dist/aos.css"
import jirafa from '../img/jirafa_opt.png'
import video from '../img/videoHappyHouse.mp4';





function Main(){

    useEffect(() => {
        Aos.init({ duration: 2000});
        
      }, []);


    return(
        
        
        

        <div className="container-fuid contenedor">
            <div className="">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12  -pt-6 contenido-texto" >
                   <h3 data-aos="zoom-in-down" className="">My <span className='happy'>Happy</span> HISTORY</h3>
                </div>
    
                <div className=" col-sm-12 col-md-6 col-lg-6 contenido-textos" data-aos="zoom-in-right">
                    <p >My Happy House nace de la vocación de una madre educadora Mariela Morales y su hija Mariela Riverón, decididas a aportar a la sociedad a través de la enseñanza en etapa de educación inicial reconociendo su importancia en la formación del ser y el impacto que tiene en su vida como adulto sembrar valores morales y sociales indispensables para su futuro. Mariela mamá comenzó este recorrido hace 20 años atrás, fundando su primera institución de educación inicial llamada “MI CASITA”, después de 5 años, inaugura su segunda institución que se mantiene aún vigente y operativa, dejando atrás la hermosa casita para expandirse y ofrecer sus servicios en un espacio más grande pero siempre quedando en su corazón y recuerdo de su familia. 
                        Como madre de 4 hijas, Mariela la tercera de ellas fue la más influenciada por esta hermosa práctica de educación, trabajando juntas la mayor parte de su vida es cuando deciden que ha llegado el momento de realizar un proyecto desde cero juntas que refleje toda esa experiencia adquirida a lo largo de los años y con la influencia de la tecnología y la innovación ofrecer un servicio de calidad único en Santiago de Chile y en memoria de nuestra hermosa casita decidimos nombrar “MY HAPPY HOUSE” nuestro lindo proyecto..</p>
                    
                </div>
                <div className=" col-sm-12 col-md-6 col-lg-6" data-aos="fade-left">
                    <video className="video-about-us" controls autoPlay loop>
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
            </div>
           
        <img src={jirafa}  alt='imagen' className='jirafa'  data-aos="fade-up"/> 
            </div>
           

        </div>
                

    
                  
    )
}
export default Main;
