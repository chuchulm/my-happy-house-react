import React from 'react'
import '../styles/post.css'


const post = ({article}) => {

console.log(article)

const {Imagenes, contenido, titulo} = article.fields

    return (


        
            <div className="container-blog">
                <div className="row  blog-caja" >
                    <div className="col mb-4">
                       <div className="card caja-fondo">
                           <img src={Imagenes.fields.file.url} className="card-img-top img-blog"  alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title blog-titulo">{titulo}</h5>
                                    <p className="card-text blog-texto" >{contenido}</p> <hr/>
                                    <p className="card-text blog-texto" >{Imagenes.sys.createdAt}</p>
                                </div>
                        </div>
                   </div>
                </div>
            </div>
        
    )
}

export default post;






