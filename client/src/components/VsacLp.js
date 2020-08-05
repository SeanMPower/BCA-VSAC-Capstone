import React from 'react';
//welcome function

function VsacLp(props) {
  return (
    <div>
      <h1>Welcome, {props.user.displayName || props.user.email}</h1>
      <button id='signout-button'type="button" onClick={props.signOut}>Sign Out</button>
    </div>
  )
}

export default VsacLp;

