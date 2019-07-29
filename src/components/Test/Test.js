import React from 'react'
import { Link }from 'react-router-dom'
const Test = ({match}) => {
     
     return (
          <div>
               <h1> I am Test and my params is {match.params.postId} </h1>
               <Link to="/">Go Home </Link>
          </div>
     )
}
export default Test
