import React from 'react';
import SignIn from './SignIn'
import ProviderLp from './ProviderLp'
import Modal from './Modal.js'

function Provider (props) {
    return (
      <div className="main-container" >
        <div className='content'>
        <h1>This is the page for Providers</h1>
          {props.user
            ? <ProviderLp user={props.user}
              signOut={props.signOut}
              uid={props.uid}
              userData={props.userData}
              firstName={props.firstName} lastName={props.lastName}
            />
            : <div>
              <h3>Please Sign in with Email and Password</h3>
              <SignIn emailSignin={props.emailSignin} handleChange={props.handleChange} />
          <div className='err'>{props.errorMessage}</div>
              <h2>Don't Have an Account?</h2>
              <button onClick={props.toggleModal}>Sign Up</button>
              {props.modalDisplay && <Modal
              errorMessage={props.errorMessage} show={props.modalDisplay} handleClose={props.handleClose} emailSignup={props.emailSignup} handleChange={props.handleChange} />}
            </div>}
        </div>
      </div >
    )
  }



export default Provider;