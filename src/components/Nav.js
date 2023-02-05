import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
     <>
     <div className='nav'>
        <div className='logo'>
                AKASH PANDEY
        </div>
          <div className='menu'>
             <Link to="/"> Home </Link>
             <Link to="/about"> About </Link>
             <Link to="/contact"> Contact </Link>
          </div>
      </div>
     </>
  )
}

export default Nav;
