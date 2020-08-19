import React from 'react';
import SignIn from './SignIn'
import ProviderLp from './ProviderLp'
import Modal from './Modal.js'

function Provider (props) {
    return (
      <div className="main-container signin-page">
        <div className='content'>
          <div className='title' id='provider'>
          <div className='line'></div>
        <h2>Institution <span>User</span></h2>
        <div className='line'></div>
        </div>
        <h3 id='provider-message'>This page is for short-term training providers.</h3>
          {props.user
            ? <ProviderLp user={props.user}
              signOut={props.signOut}
              uid={props.uid}
              userData={props.userData}
              firstName={props.firstName} lastName={props.lastName}
            />
            : <div>
              <h3 className='login-message'>Log into your provider account</h3>
              <SignIn emailSignin={props.emailSignin} handleChange={props.handleChange} />
          <div className='err'>{props.errorMessage}</div>
              <h3 id='acct-msg'>Don't Have an Account?</h3>
              <button onClick={props.toggleModal} className='submit'>Sign Up</button>
              {props.modalDisplay && <Modal
              errorMessage={props.errorMessage} show={props.modalDisplay} handleClose={props.handleClose} emailSignup={props.emailSignup} handleChange={props.handleChange} />}
            </div>}
        </div>
      </div >
    )
  }



export default Provider;