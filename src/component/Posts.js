import React from 'react'
import Post from './post'
import NavBarBlog from '../component/navBarBlog'
import Footer from './footer'


const Posts = ({posts}) => {


    
    return (
        <>
        <div className=''>
            
            <NavBarBlog/>

            {posts.map(( article, index )=> 
                     
                <Post article={article} key={index}/>)}
               
        </div>
        <Footer/>
        </>
    )
}


export default Posts;


