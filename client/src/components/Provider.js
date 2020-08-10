import React from 'react';
import { Link } from 'react-router-dom'
// import { fireApp } from '../assets/firebaseConfig';
// import { fireAuth } from '../assets/firebaseConfig';
// import { fireData } from '../assets/firebaseConfig';
import SignUp from './SignUp'
import SignIn from './SignIn'
import ProviderLp from './ProviderLp'
// import axios from 'axios'

function Provider (props) {

    // console.log(fireApp)
    // console.log(fireAuth)
    // console.log(this.state.userData)
    // console.log(this.state.user)
    return (
      <div className="main-container" >
        <div id='navbar'>
          <Link to='/' className='btn'>
            Home
        </Link>
          <div id='space'>
          </div>
          {props.user ?
            <div className='msg'>
              Signed in as: {props.user.displayName || props.user.email}
            </div> : <div />
          }
        </div>
        <h1>This is the page for Provider users</h1>
        <div className='main-container'>
          {props.user
            ? <ProviderLp user={props.user}
              signOut={props.signOut}
              uid={props.uid}
              userData={props.userData}
            />
            : <div>
              <h4>Please Sign in</h4>
              <SignIn emailSignin={props.emailSignin} handleChange={props.handleChange} />
              <SignUp emailSignup={props.emailSignup} handleChange={props.handleChange} />
            </div>}
        </div>
      </div >
    )
  
}


export default Provider;