import React from "react";
import { Link } from "react-router-dom";
import { fireApp } from "../assets/firebaseConfig";
import { fireAuth } from "../assets/firebaseConfig";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ProviderLp from "./ProviderLp";
import Modal from './Modal.js'
// import axios from 'axios'
// import { myData } from './assets/firebaseConfig';
// import { googleProvider } from './assets/firebaseConfig';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user: "",
      // user: fireApp.auth().currentUser,
      email: "",
      password: "",
      newEmail: "",
      newPassword: "",
      confirmPassword: '',
      uid: "",
    };
  }

  showModal = () => {
    this.setState(() => {
      return { modalDisplay: true };
    });
  };

  handleClose = () => {
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
    console.log(fireApp);
    console.log(fireAuth);
    return (
      <div className="main-container">
        <h1>This is the page for Provider users</h1>
        <div className="content">
          {this.props.user ? (
            <ProviderLp
              user={this.props.user}
              signOut={this.props.signOut}
              uid={this.props.uid}
              // userData={this.state.userData}
            />
          ) : (
            <div>
              <h2>Please Sign in with Email and Password</h2>
              <SignIn
                emailSignin={this.emailSignin}
                handleChange={this.handleChange}
              />
              <h1>Don't have an account?</h1>
              <button className='sign-up'onClick={this.showModal}>Sign Up</button>
              {this.state.modalDisplay && <Modal handleClose={this.handleClose} />}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Provider;
