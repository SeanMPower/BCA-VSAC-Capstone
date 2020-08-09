import React from "react";
import { Link } from "react-router-dom";
import { fireApp } from "../assets/firebaseConfig";
import { fireAuth } from "../assets/firebaseConfig";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import VsacLp from "./VsacLp";
import Modal from "./SignUp.js";

class Vsac extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      newEmail: "",
      newPassword: "",
      modalDisplay: "none",
    };
  }

  showModal = (evt) => {
    console.log("show");
    evt.preventDefault();
    this.setState(() => {
      return { modalDisplay: "" };
    });
  };

  handleClose = (evt) => {
    console.log("close");
    evt.preventDefault();
    this.setState(() => {
      return {
        modalDisplay: "",
      };
    });
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  //Signing in with email and password
  emailSignin = (evt) => {
    evt.preventDefault();

    let formEmail = this.state.email;
    let formPassword = this.state.password;

    fireApp
      .auth()
      .signInWithEmailAndPassword(formEmail, formPassword)
      .then((res) => {
        this.setState({ user: res.user });
      });
  };

  //signing up with email and password
  emailSignup = (evt) => {
    evt.preventDefault();

    let newFormEmail = this.state.newEmail;
    let newFormPassword = this.state.newPassword;
    let confirmFormPassword = this.state.confirmPassword;

    console.log(newFormEmail);
    console.log(newFormPassword);

    newFormPassword === confirmFormPassword
      ? fireApp
          .auth()
          .createUserWithEmailAndPassword(newFormEmail, newFormPassword)
          .then((res) => {
            this.setState({ user: res.user });
          })
          .catch((error) => {
            console.log(error.message);
          })
      : alert("Passwords must match!");
  };

  signOut = (evt) => {
    evt.preventDefault();

    fireApp
      .auth()
      .signOut()
      .then((res) => {
        this.setState({ user: "" });

        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div className="main-container">
        <h1>This is the page for VSAC users</h1>
        <div className="content">
          <div className="main">
            {this.state.user ? (
              <VsacLp
                user={this.state.user}
                signOut={this.signOut}
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
                <button onClick={this.showModal}>Sign Up</button>
                <Modal
                  displayModal={this.state.modalDisplay}
                  handleClose={this.handleClose}
                >
                  Message in Modal
                </Modal>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Vsac;
