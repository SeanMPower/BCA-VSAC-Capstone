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
  signUp = (evt) => {
    evt.preventDefault();
    this.props.emailSignup();
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
              emailSignup={this.signUp}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;