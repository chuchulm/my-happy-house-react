import React from 'react'
import { client } from './client';
import Posts from './Posts'




class Blog extends React.Component{


    state = {
     articulos: []

     
    }

    componentDidMount(){
        client.getEntries()
        .then((response)=> {
           console.log(response.items)

            this.setState({ articulos: response.items})
        

        })
    
        .catch(console.error)
            
    
    }

    render(){

        return(
           <div>
        
             <Posts posts={this.state.articulos}/>
              
           </div>
          
          
        )
    }
}
export default Blog;