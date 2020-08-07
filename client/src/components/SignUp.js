import React from "react";
//sign in/sign up forms

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <div>

     </div>
    );
  }
}

function SignUp(props) {
  return (
    <div className="container">
      <h4>Don't have an account yet?</h4>
      <div className="form-container">
        <h4>Sign Up:</h4>
        <form id="signup-form" onSubmit={props.emailSignup}>
          <label className="email">
            {" "}
            Email:
            <input
              type="text"
              name="newEmail"
              id="new-email"
              value={props.newEmail}
              onChange={props.handleChange}
            />
          </label>
          <label className="password">
            {" "}
            Password:
            <input
              type="password"
              name="newPassword"
              id="new-password"
              value={props.newPassword}
              onChange={props.handleChange}
            />
          </label>
          <label className="c-password">
            {" "}
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              value={props.confirmPassword}
              onChange={props.handleChange}
            />
          </label>
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
}

export { SignUp };
