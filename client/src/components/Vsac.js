import React from 'react';
import SignIn from './SignIn'
import VsacLp from './VsacLp'


function Vsac (props) {

    return (
      <div className="main-container">
        <div className='content'>
        <h1>This is the page for VSAC users</h1>
          {props.user
            ? <VsacLp user={props.user}
              signOut={props.signOut}
              userData={props.userData}
            />
            : <div>
              <h3>Please Sign in with Email and Password</h3>
              <SignIn emailSignin={props.emailSignin} handleChange={props.handleChange} />
              <div className='err'>{props.errorMessage}</div>
            </div>}
        </div>
      </div>
    );
  
}

export default Vsac;