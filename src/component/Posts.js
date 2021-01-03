import React from 'react'
import Post from './post'
import NavBarBlog from '../component/navBarBlog'


const Posts = ({posts}) => {
    return (
        <div>
            
            <NavBarBlog/>

            {posts.map(( article, index )=> 

                <Post article={article} key={index}/>)}
                
        </div>
    )
}


export default Posts;


