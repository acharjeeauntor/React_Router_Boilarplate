import React from 'react'
import {Link} from 'react-router-dom'
const Home =(props) =>{
     return (
          <div>
               <h1> I am Home and a {props.name} Page</h1>  
          <Link to='/posts/post-1'>post1</Link>
          <Link to='/posts/post-2'>post2</Link>
          <Link to='/posts/post-3'>post3</Link>
          </div>
     )
}
export default Home
