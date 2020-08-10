import React from "react";
import { Link } from "react-router-dom";
import { fireApp } from "../assets/firebaseConfig";
import { fireAuth } from "../assets/firebaseConfig";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import VsacLp from "./VsacLp";
import Modal from "./Modal.js";

class Vsac extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      newEmail: "",
      newPassword: "",
      modalDisplay: false,
    };
  }

  showModal = () => {
    console.log("show");
    this.setState(() => {
      return { modalDisplay: true };
    });
  };

  handleClose = () => {
    console.log("close");
    this.setState(() => {
      return {
        modalDisplay: false,
      };
    });
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

      //Signing in with email and password
      emailSignin = (evt) => {
        evt.preventDefault();
        this.props.signIn(this.state.email, this.state.password);
      };
    
      //signing up with email and password
      emailSignup = (evt) => {
        evt.preventDefault();
        this.props.signUp(this.state.name, this.state.newEmail, this.state.newPassword, this.state.confirmPassword)
      };

  render() {
    return (
      <div className="main-container">
        <h1>This is the page for VSAC users</h1>
        <div className="content">
            {this.props.user ? (
              <VsacLp
                user={this.props.user}
                signOut={this.props.signOut}
                // userData={this.state.userData}
              />
            ) : (
              <div>
                <h2>Please Sign in with Email and Password</h2>
                <SignIn
                  emailSignin={this.emailSignin}
                  handleChange={this.handleChange}
                />

                <SignUp
                  emailSignup={this.emailSignup}
                  handleChange={this.handleChange}
                />
                <h1>Don't have an account?</h1>
                <button className='sign-up' onClick={this.showModal}>Sign Up</button>
                {this.state.modalDisplay && <Modal handleClose={this.handleClose} />}
              </div>
            )}
          </div>
        </div>
    );
  }
}

export default Vsac;
