import React from 'react';
//welcome function
function Welcome(props) {
    return (
      <div>
        <h1>Welcome, {props.user.displayName || props.user.email}</h1>
      </div>
    )
  }
  
  export default Welcome;