import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import { Header } from "./components/Header.js";
import Home from "./components/Home.js";
import Vsac from "./components/Vsac.js";
import ProgramPage from "./components/ProgramPage.js";
import Provider from "./components/Provider.js";
import ErrorPage from "./components/ErrorPage.js";
import Footer from "./components/Footer.js";
import { fireApp } from "./assets/firebaseConfig";
import { fireData } from "./assets/firebaseConfig";
import Modal from "./components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFirstname: "",
      newLastname: "",
      firstName: "",
      lastName: "",
      user: "",
      email: "",
      password: "",
      newEmail: "",
      newPassword: "",
      uid: "",
      userData: "",
      modalDisplay: false,
      signedIn: false,
      error: "",
      shouldUpdate: true,
      menuDisplay: false,
      programs: [] || "There is no data to display yet",
      updateModal: "none",
      updatedProgram: {},
      signupModal: false,
      vsacModal: false,
      providerModal: false
    };
  }

  //Sets modal display to opposite of its prevstate, sets error to none. disables scrolling when modal is opened.
  toggleModal = () => {
    this.setState(
      (prevState) => {
        return {
          modalDisplay: !prevState.modalDisplay,
          error: "",
        };
      },
      () => {
        // if (this.state.modalDisplay === true) {
        //   this.windowOffset = window.scrollY;
        //   document.body.setAttribute(
        //     "style",
        //     `position: fixed; top: -${this.windowOffset}px; left: 0; right: 0`
        //   );
        // } else {
        //   document.body.setAttribute("style", "");
        //   window.scrollTo(0, this.windowOffset);
        //   document.body.removeAttribute(
        //     "style",
        //     `position: fixed; top: -${this.windowOffset}px; left: 0; right: 0`
        //   );
        // }
      }
    );
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuDisplay: !prevState.menuDisplay,
    }));
    console.log(this.state.menuDisplay);
  };

  //Gets user data from database and sets it in state
  componentDidMount() {
    if (this.state.user) {
      fireData.ref("/users/" + this.state.user.uid).once("value", (data) => {
        this.setState({
          userData: data.val(),
        });
      });
    }
  }

  //gets data for users when they sign in
  async componentDidUpdate() {
    if (this.state.shouldUpdate && this.state.user) {
      console.log(this.state.user.uid);
      let data = await fireData
        .ref("/users/" + this.state.user.uid)
        .once("value")
        .then((data) => data.val());
      this.setState({
        firstName: data.firstName,
        lastName: data.lastName,
        shouldUpdate: false,
      });
      console.log(data);
      if (this.state.userData.role !== data.role) {
        this.setState({ userData: data });
      }
    }
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
        this.setState({
          user: res.user,
          uid: res.user.uid,
          signedIn: true,
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.user.email,
        });
        console.log(res.user.email);
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  //signing up with email and password
  emailSignup = async (evt) => {
    evt.preventDefault();

    let newFormName = this.state.newFirstname;
    let newFormLastName = this.state.newLastname;
    let newFormEmail = this.state.newEmail;
    let newFormPassword = this.state.newPassword;
    let confirmFormPassword = this.state.confirmPassword;

    console.log(newFormEmail);
    console.log(newFormPassword);

    newFormPassword === confirmFormPassword
      ? await fireApp
          .auth()
          .createUserWithEmailAndPassword(newFormEmail, newFormPassword)
          .then((res) => {
            this.setState({ user: res.user, signedIn: true, email: newFormEmail });
          })
          .catch((error) => {
            console.log(error.message);
            console.log(typeof error.message)
            if (
              error.message ===
              "The password is invalid or the user does not have a password."
            ) {
              this.setState({
                error:
                  "That doesn't seem to be the right password... Please try again or sign up for an account.",
              });
            } else if (
              error.message ===
              "There is no user record corresponding to this identifier. The user may have been deleted."
            ) {
              this.setState({
                error:
                  "The email you entered doesn't appear to be in our database... Please try a different email address or Sign up for an account.",
              });
            } else if (
              error.message === "The email address is badly formatted."
            ) {
              this.setState({
                error:
                  "Please enter a valid email, or Sign up for a new account.",
              });
            } else {
              this.setState({ error: error.message });
            }
          })
      : alert("Passwords must match!");

    fireData
      .ref("/users/" + this.state.user.uid)
      .set({ role: "user", firstName: newFormName, lastName: newFormLastName })
      .then((res) => {
        this.setState({ userData: { role: "user" } });
        // user: res.user, uid: res.user.uid, signedIn: true, firstName: res.firstName, lastName: res.lastName, email: res.email} );
        
      });
  };

  signOut = (evt) => {
    evt.preventDefault();

    fireApp
      .auth()
      .signOut()
      .then((res) => {
        this.setState({
          newFirstname: "",
          newLastname: "",
          newOrganization: "",
          organization: "",
          firstName: "",
          lastName: "",
          user: "",
          email: "",
          password: "",
          newEmail: "",
          newPassword: "",
          uid: "",
          userData: "",
          modalDisplay: false,
          signedIn: false,
          error: "",
          shouldUpdate: true,
          signupModal: false,
          vsacModal: false,
          providerModal: false
        });

        console.log(res);
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <div className="App">
        <div
          id="main-menu"
          style={{ display: (window.innerWidth > '769px') ? 'none' : (this.state.menuDisplay ? "flex" : "none" )}}
        >
          <div id='link-container'>
          <Link to="/" id="home" className='link' onClick={this.toggleMenu}>
            Home
          </Link>
          <Link to="/vsac-user" id="vsac" className='link' onClick={this.toggleMenu}>
            VSAC Portal
          </Link>
          <Link to="/provider-user" className='link' onClick={this.toggleMenu}>
            Institution Portal
          </Link>
          </div>
        </div>
        <Header
          signedIn={this.state.signedIn}
          email={this.state.email}
          signOut={this.signOut}
          user={this.state.user}
          openMenu={this.toggleMenu}
          menuDisplay={this.state.menuDisplay}
        />
        <div className="homepage"></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/vsac-user"
            render={() => (
              <Vsac
                signOut={this.signOut}
                emailSignin={this.emailSignin}
                handleChange={this.handleChange}
                user={this.state.user}
                userData={this.state.userData}
                errorMessage={this.state.error}
              />
            )}
          />
          <Route
            path="/provider-user"
            render={() => (
              <Provider
                errorMessage={this.state.error}
                handleClose={this.toggleModal}
                signOut={this.signOut}
                emailSignin={this.emailSignin}
                handleChange={this.handleChange}
                user={this.state.user}
                userData={this.state.userData}
                uid={this.state.uid}
                modalDisplay={this.state.modalDisplay}
                emailSignup={this.emailSignup}
                toggleModal={this.toggleModal}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                organization={this.state.organization}
              />
            )}
          />
          <Route path="/program/:_id" render={() => <ProgramPage />} />
          <Route component={ErrorPage} />
        </Switch>
        {this.state.modalDisplay && <Modal vsacModal={this.state.vsacModal} providerModal={this.state.providerModal}/>}
        <div id="page"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
