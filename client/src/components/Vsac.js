import React from "react";
import SignIn from "./SignIn";
import VsacLp from "./VsacLp";

function Vsac(props) {
  return (
    <div className="main-container">
      <div className="content">
      <div className="title">
        <div className="line"></div>
        <h2>VSAC <span>users</span></h2>
        <div className="line"></div>
      </div>
        {props.user ? (
          <VsacLp
            user={props.user}
            signOut={props.signOut}
            userData={props.userData}
          />
        ) : (
          <div>
            <h3 className='login-message'>Log in to your VSAC Account</h3>
            <SignIn
              emailSignin={props.emailSignin}
              handleChange={props.handleChange}
            />
            <div className="err">{props.errorMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Vsac;
