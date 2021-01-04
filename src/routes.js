import React from 'react';
import {Switch, Route} from 'react-router-dom'
import SimpleReactLightbox from "simple-react-lightbox";
import Home from './component/Home'
import Blog from './component/blog'
import Lacasa from './component/lacasa'




function Routes(){
    return(
        <SimpleReactLightbox>
       <Switch>
           <Route  exact path= "/" component ={Home}/>
           <Route  path= "/blog" component ={Blog}/>
           <Route  path= "/lacasa" component ={Lacasa}/>
       </Switch>
       </SimpleReactLightbox>
    );
}
export default Routes;


