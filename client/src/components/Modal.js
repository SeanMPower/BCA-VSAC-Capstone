import React from "react";
import SignUp from "./SignUp.js";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  //signing up with email and password
  emailSignup = (evt) => {
    evt.preventDefault();
    this.props.signUp(
      this.state.name,
      this.state.newEmail,
      this.state.newPassword,
      this.state.confirmPassword
    );
  };

  render() {
    return (
      <>
        <div className="modal-container">
          <div className="modal">
          <div id="close-btn" onClick={this.props.handleClose}>
              +
            </div>
            <SignUp
              emailSignup={this.emailSignup}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
