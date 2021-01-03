import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './component/Home'
import Blog from './component/blog'
import Personal from './component/personal'




function Routes(){
    return(
       <Switch>
           <Route  exact path= "/" component ={Home}/>
           <Route  path= "/blog" component ={Blog}/>
           <Route  path= "/personal" component ={Personal}/>
           
           {/* <Route  path= "/Lightbox" component ={Lightbox1}/> */}

       </Switch>
    );
}
export default Routes;


