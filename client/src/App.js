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
      providerModal: false,
    };
  }

  //Sets modal display to opposite of its prevstate, sets error to none. disables scrolling when modal is opened.
  toggleModal = () => {
    this.setState((prevState) => {
      return {
        modalDisplay: !prevState.modalDisplay,
        error: "",
      };
    });
  };

  toggleMenu = () => {
    // This toggles the hamburger menu drop-down when in mobile view
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
    // This tracks changes to the various input fields and sets them in state
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

    newFormPassword === confirmFormPassword
      ? await fireApp
          .auth()
          .createUserWithEmailAndPassword(newFormEmail, newFormPassword)
          .then((res) => {
            this.setState({
              user: res.user,
              signedIn: true,
              email: newFormEmail,
              uid: res.user.uid,
            });
          })
          .catch((error) => {

            this.setState({ error: error.message });
          })
      : this.setState({ error: "Passwords must match!" });

    // Assigning Name and role to new Institution user on Firebase
    (newFormPassword === confirmFormPassword && this.state.user.uid)
      ? await fireData
          .ref("/users/" + this.state.user.uid)
          .set({
            role: "user",
            firstName: newFormName,
            lastName: newFormLastName,
          })
          .then((res) => {
            this.setState({ userData: { role: "user" } })
          .catch((error) => {
              this.setState({ error: error.message });
            });
          })
      : this.setState({ error: "This user already exists." });
  };

  signOut = (evt) => {
    // Signs current user out and resets state
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
          providerModal: false,
        });

      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <div className="App">
        <div
          id="main-menu" // If window width is less than 769 pixels it will hide menu and display mobile version
          style={{
            display:
              window.innerWidth > "769px"
                ? "none"
                : this.state.menuDisplay
                ? "flex"
                : "none",
          }}
        >
          <div id="link-container">
            <Link to="/" id="home" className="link" onClick={this.toggleMenu}>
              Home
            </Link>
            <Link
              to="/vsac-user"
              id="vsac"
              className="link"
              onClick={this.toggleMenu}
            >
              VSAC Portal
            </Link>
            <Link
              to="/provider-user"
              className="link"
              onClick={this.toggleMenu}
            >
              Institution Portal
            </Link>
          </div>
        </div>
        {/* This calls the Header component which will always display */}
        <Header
          signedIn={this.state.signedIn}
          email={this.state.email}
          signOut={this.signOut}
          user={this.state.user}
          openMenu={this.toggleMenu}
          menuDisplay={this.state.menuDisplay}
        />
        <div className="homepage"></div>
        {/* This Switch sets the paths for the variable display components */}
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
          <Route path="/program/:_id" render={() => <ProgramPage />} />{" "}
          {/* Path for individual program page */}
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
