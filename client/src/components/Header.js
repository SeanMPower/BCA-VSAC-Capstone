import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

let providerName = 'Provider User'

function Header(props) {
  return (

    <div id="header">
      <a href='https://www.vsac.org/'>
        <img className="logo" src={Logo} title="VSAC logo" alt="VSAC logo" />
      </a>
      <div id='navbar'>
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
        {props.user ?
        <div className='msg'>
          Signed in as: {props.user.displayName || props.user.email}
        </div> : <div />
  }
        </div>
        {/* Division Bell Baby */}
        <div id='navbar'>
        </div>
    </div>
  );
}

export default Header;
