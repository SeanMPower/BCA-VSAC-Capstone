import React from "react";
import SignUp from "./SignUp.js";

function Modal (props) {


  
    return (
      <>
        <div className="modal-container">
          <div className="modal">
          <div id="close-btn" onClick={props.handleClose}>
              +
            </div>
            <div id='signup-modal'>
            <SignUp
              errorMessage={props.errorMessage}
              emailSignup={props.emailSignup}
              handleChange={props.handleChange}
            />
            </div>
          </div>
        </div>
      </>
    );
  }


export default Modal;