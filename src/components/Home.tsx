import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div style={{margin:"100px"}}>
      
        {/* <Link to='/'>Home</Link>  */}
        <Link to='/create'>Create</Link>
        {/* <Link to='/adduser'>Add User</Link>  */}


        </div>
  )
}

export default Home