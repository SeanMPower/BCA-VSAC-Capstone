import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
    <div id="header">
      <div id='navbar'>
      <a href='https://www.vsac.org/'>
        <img className="logo fadeInDown" src={Logo} title="VSAC logo" alt="VSAC logo" />
      </a>
        <Link to='/' className='btn' id='home'>
            Home
        </Link>
        <Link to='/vsac-user' className='btn' id='vsac'>
            VSAC Portal
        </Link>
        <Link to='/provider-user' className='btn' id='institution'>
          Institution Portal
        </Link>
        <div id='space'>
        </div>
        <div className={`menu-btn ${props.menuDisplay ? 'open' : ''}`} onClick={props.openMenu}>  {/* Mobile responsive menu */}
          <div className='menu-btn__burger'></div>
        </div>  {/* Below is a ternary that will display the log-in of current user if applicable */}
        {props.signedIn ?    
        <>
        <div className='msg'>
          Signed in as: {props.user.displayName || props.user.email}   
        </div><div className='signout-container'><button className='signout-button' type="button" onClick={props.signOut}>Sign Out</button></div></> : <div />}
        </div>
    </div>
            </>
  );
}

export { Header };
