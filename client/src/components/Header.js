import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

let providerName = 'Provider User'

function Header(props) {
  return (
<>
    <div id="header">
      <div id='navbar'>
      <a href='https://www.vsac.org/'>
        <img className="logo" src={Logo} title="VSAC logo" alt="VSAC logo" />
      </a>
        <Link to='/' className='btn'>
            Home
        </Link>
        <Link to='/vsac-user' className='btn'>
            VSAC User
        </Link>
        <Link to='/provider-user' className='btn'>
          {providerName}
        </Link>
        <div id='space'>
        </div>
        {props.signedIn ?
        <>
        <div className='msg'>
          Signed in as: {props.user.displayName || props.email}
        </div><div className='signout-container'><SignOut signOut={props.signOut}/></div></> : <div />}
        </div>
    </div>
            <div className='homepage'>
            </div>
            </>
  );
}

function SignOut(props) {
  return(
    <button id='signout-button' type="button" onClick={props.signOut}>Sign Out</button>
  )
}

export { Header };