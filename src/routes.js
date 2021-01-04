import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './component/Home'
import Blog from './component/blog'
import Lacasa from './component/lacasa'




function Routes(){
    return(
       <Switch>
           <Route  exact path= "/" component ={Home}/>
           <Route  path= "/blog" component ={Blog}/>
           <Route  path= "/lacasa" component ={Lacasa}/>
       </Switch>
    );
}
export default Routes;


