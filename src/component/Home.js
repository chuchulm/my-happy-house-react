import React from  'react'
import Header from './Header';
import Main from './main'
// import Personal from './personal'
import Carousel from './Carousel'
import Portafolio from './Portafolio'
import Footer from './footer'
import Paralax from './paralax'
import Iconos from './iconos'




function Home(){
  return(
    <div>
     <Header/>
     <Main/>
     <Carousel/>
     <Portafolio/>
     {/* <Personal/> */}
     <Paralax/>
     <Footer/>
     <Iconos/>
     
     
    
     </div>
  )
}

export default Home;