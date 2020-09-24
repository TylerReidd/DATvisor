import React from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav className="navbar-nav">
          <div>
            <span className="navbar-brand">
             <div className="d-flex justify-content-around">  Welcome, {user.name} </div> 
             <div className='image-container'>
               <img src="https://i.imgur.com/bcYXOOF.png" height="100px"/>
             </div>
              <button 
              className="btn btn-secondary btn-sm" onClick={handleLogout}>Log Out
                  </button>
              
            </span>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <span  className="navbar-brand">
              <div><a href="/login" className="d-flex justify-content-around">Log In</a></div>
              
              <div><a href="/signup" className="nav-link">Sign Up</a></div>
            </span>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
