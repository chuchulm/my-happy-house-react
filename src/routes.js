import React from 'react';
import {Switch, Route} from 'react-router-dom'
import SimpleReactLightbox from "simple-react-lightbox";
import Home from './component/Home'
import Blog from './component/blog'
import Lacasa from './component/lacasa'
import LazyLoad from 'react-lazyload';



function Routes(){
    return(
        <SimpleReactLightbox>
       <Switch>
            <LazyLoad height={200} once >
                <Route  exact path= "/" component ={Home}/>
                <Route  path= "/blog" component ={Blog}/>
                <Route  path= "/lacasa" component ={Lacasa}/>
            </LazyLoad>
       </Switch>
       </SimpleReactLightbox>
    );
}
export default Routes;





