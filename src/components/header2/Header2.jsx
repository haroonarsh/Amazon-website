import React from 'react'
import './header2.css'
import { Link } from 'react-router-dom'

function Header2({toggleSidebar, toggleSide}) {
  return (
    <>
        <div className='header2'>
            <div className='nav-left'>
            <div className='nav' onClick={toggleSidebar}>
                <p onClick={toggleSide}><i className="fa-solid fa-bars"></i>All</p>
            </div>
            <div className='nav-tools'>
                <Link to='deals'>
                <p>Today's Deals</p>
                </Link>
                <Link to='services'>
                <p>Customer Service</p>
                </Link>
                <Link to="#">
                <p>Rigistry</p>
                </Link>
                <Link to="gifts">
                <p>Gift Cards</p>
                </Link>
                <Link to="#">
                <p>Sell</p>
                </Link>
            </div>
        </div>

        <div className='nav-right'>
            <p>Shop the Gaming Store</p>
        </div>
        </div>
    </>
  )
}

export default Header2