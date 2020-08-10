import React from 'react';
import { Link } from 'react-router-dom'
// import { fireApp } from '../assets/firebaseConfig';
// import { fireAuth } from '../assets/firebaseConfig';
// import { fireData } from '../assets/firebaseConfig';
import SignIn from './SignIn'
import VsacLp from './VsacLp'


function Vsac (props) {

    return (
      <div className="main-container">
        <div className='content'>
        <h1>This is the page for VSAC users</h1>
        <div className='main'>
          {props.user
            ? <VsacLp user={props.user}
              signOut={props.signOut}
              userData={props.userData}
            />
            : <div>
              <h2>Please Sign in with Email and Password</h2>
              <SignIn emailSignin={props.emailSignin} handleChange={props.handleChange} />
            </div>}
        </div>
      </div>
      </div>
    );
  
}

export default Vsac;