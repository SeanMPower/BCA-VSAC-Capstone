import React from "react";
import { Link } from "react-router-dom";
import { fireApp } from "../assets/firebaseConfig";
import { fireAuth } from "../assets/firebaseConfig";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ProviderLp from "./ProviderLp";
// import axios from 'axios'
// import { myData } from './assets/firebaseConfig';
// import { googleProvider } from './assets/firebaseConfig';

class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      user: "",
      // user: fireApp.auth().currentUser,
      email: "",
      password: "",
      newEmail: "",
      newPassword: "",
      uid: "",
    };
  }

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
        this.setState({ user: res.user, uid: res.user.uid });
        console.log(res.user.uid);
      });
  };

  //signing up with email and password
  emailSignup = (evt) => {
    evt.preventDefault();

    let newFormName = this.state.name;
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
    console.log(fireApp);
    console.log(fireAuth);
    return (
      <div className="main-container">
        <h1>This is the page for Provider users</h1>
        <div className="content">
          {this.state.user ? (
            <ProviderLp
              user={this.state.user}
              signOut={this.signOut}
              uid={this.state.uid}
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
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Provider;
