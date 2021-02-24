import React from 'react'
import '../styles/post.css'




const post = ({article}) => {



const {Imagenes, contenido, titulo, fecha} = article.fields

    return (
        <>
          
           
     
            <div className="container-fluid contenedor-blog ">
                <div className="row ">
                        <div className=" col-md-5 col sm-5 mx-auto mb-5">
                           <div className="card mb-2 mt-4 caja-fondo">
                               <img src={Imagenes.fields.file.url} className="card-img-top img-fluid"  alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title blog-titulo blog-titulo">{titulo}</h5>
                                        <p className="card-text blog-texto blog-texto" >{contenido}</p> <hr/>
                                        <p className="card-text blog-texto" >{fecha}</p>
                                    </div>
                            </div>
                       </div>
                       
                </div>
 
            </div>

           
         
        </>   
        
    )
}

export default post;






