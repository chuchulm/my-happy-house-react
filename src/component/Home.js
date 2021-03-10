import React from  'react'
import Header from './Header';
import Main from './main'
import Carousel from './Carousel'
import Portafolio from './Portafolio'
import FooterPrincipal from './FooterPrincipal'
import Paralax from './paralax'
import IconosWhatsapp from './iconoWhatsapp'




function Home(){
  return(
    <div>
     <Header/>
     <Main/>
     <Carousel/>
     <Portafolio/>
     <Paralax/>
     <FooterPrincipal/>
     <IconosWhatsapp/>
     
     
    
     </div>
  )
}

export default Home;