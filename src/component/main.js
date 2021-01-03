import React from 'react'
import '../styles/main.css';
import FondoVerde from '../img/fondoVerde.jpg';
import jirafa from '../img/jirafa.png'
import video from '../img/videoHappyHouse.mp4';





function Main(){
    return(
        
        
        <div className="contenedor">
            

                
                <div className="contenido-texto">
                    <h3>My <span className='happy'>Happy</span> House</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                </div>
            

                <div className="sobre-nosotros">
                        
                    <video className="video-about-us"  autoplay controls loop audio>
                      <source src={video} type="video/mp4"></source>
                    </video>
                    
                </div>

    
                

                    <img src={jirafa}  alt='imagen' className='jirafa' width="460px" height="250px"/>
        
                   
                   
                   

            
        </div>
                

    
                  
    )
}
export default Main;





/*












*/
