import React from 'react'
import '../styles/iconos.css';



function Iconos(){
    return(

    <div className="container-icons">
        <a href="https://www.facebook.com/myhappyhouse.cl"><div className="row-icon icon1"><h4>Facebook</h4><label className="fab fa-facebook-square label1"></label></div></a>
        <a href=""><div className="row-icon icon2"><h4>Whatsapp</h4><label className="fab fa-whatsapp-square label2"></label></div></a>
        <a href="https://www.instagram.com/myhappyhouse.cl/"><div className="row-icon icon3"><h4>Instagram</h4><label className="fab fa-instagram-square label3"></label></div></a>
        <a href=""><div className="row-icon icon4"><h4>Messenger</h4><label className="fab fa-facebook-messenger label4"></label></div></a>
        
        
        <h2 className="fas fa-graduation-cap circulorojo"></h2>
    </div>
    )
}
export default Iconos;
