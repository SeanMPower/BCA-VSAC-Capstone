import React from 'react';
import { Link } from 'react-router-dom'
//welcome function

function VsacLp(props) {
  return (
    <div>{props.userData.role === "admin"
    ? <div>
    <h1>Hello, {props.user.displayName || props.user.email}</h1>
    <button id='signout-button'type="button" onClick={props.signOut}>Sign Out</button>
    <div id='db-info-container'>
        Placeholder for DB info
      </div>
  </div>
  : 
  <div>
        <p>Please sign in on the Provider page</p>
        <p><Link to='/provider-user'>
          Provider User
        </Link></p>
        <button id='signout-button' type="button" onClick={props.signOut}>Sign Out</button>
      </div>
    }
    </div>
  )
}

export default VsacLp;

