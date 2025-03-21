import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='page-not-found container'>
        <h1>Page NoT Found Click here for HomePage</h1>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default PageNotFound