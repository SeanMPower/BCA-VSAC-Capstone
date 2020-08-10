import React from 'react';
import { Link } from 'react-router-dom'
// import { fireApp } from '../assets/firebaseConfig';
// import { fireAuth } from '../assets/firebaseConfig';
// import { fireData } from '../assets/firebaseConfig';
import SignUp from './SignUp'
import SignIn from './SignIn'
import ProviderLp from './ProviderLp'
// import axios from 'axios'
import Modal from './Modal.js'

function Provider (props) {
    return (
      <div className="main-container" >
        <h1>This is the page for Provider users</h1>
        <div className='main-container'>
          {this.props.user
            ? <ProviderLp user={this.props.user}
              signOut={this.props.signOut}
              uid={this.props.uid}
              userData={this.props.userData}
            />
            : <div>
              <h4>Please Sign in</h4>
              <SignIn emailSignin={props.emailSignin} handleChange={props.handleChange} />
              <h2>Don't Have an Account?</h2>
              <button onClick={props.toggleModal}>Sign Up</button>
              {props.modalDisplay && <Modal show={props.modalDisplay} handleClose={props.handleClose} emailSignup={props.emailSignup} handleChange={props.handleChange} />}
            </div>}
        </div>
      </div >
    )
  }



export default Provider;