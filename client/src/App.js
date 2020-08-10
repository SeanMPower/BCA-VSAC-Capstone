import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router'
import Header from './components/Header.js'
import Home from './components/Home.js'
import Vsac from './components/Vsac.js'
import Provider from './components/Provider.js'
import ErrorPage from './components/ErrorPage.js'
import Footer from './components/Footer.js'
// import authApp from './assets/firebaseConfig.js'
import Dbpage from './components/Database.js'
import { fireApp } from "./assets/firebaseConfig";
import { fireAuth } from "./assets/firebaseConfig"


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentEmail: '',
      user: undefined,
      uid: undefined
    }
  }

    //Signing in with email and password
    signIn = (email, password) => {
  
      let formEmail = email;
      let formPassword = password;

      fireApp
        .auth()
        .signInWithEmailAndPassword(formEmail, formPassword)
        .then((res) => {
          this.setState({ user: res.user, uid: res.user.uid });
          console.log(res.user.uid);
        });
        this.setState({
          currentEmail: formEmail,
        })
    };
  
    //signing up with email and password
    signUp = (name, email, password, confirmPassword) => {

      let newFormName = name;
      let newFormEmail = email;
      let newFormPassword = password;
      let confirmFormPassword = confirmPassword;
  
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
        this.setState({
          currentEmail: newFormEmail
        })
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
      this.setState({
        currentEmail: '',
        user: undefined,
        uid: undefined
      })
    };

  render() {
    // console.log(authApp)

    return (
      <div className="App" >
        <Header email={this.state.currentEmail} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path ='/vsac-user' render={ (props) => (<Vsac {...props} signIn={this.signIn} signUp={this.signUp} signOut={this.signOut} user={this.state.user} uid={this.state.uid}/>) } />
          <Route path ='/provider-user' render={ (props) => (<Provider {...props} signIn={this.signIn} signUp={this.signUp} signOut={this.signOut} user={this.state.user} uid={this.state.uid}/>) } />
          <Route path='/database' component={Dbpage} />
          {/* <Route component={ErrorPage} /> */}
        </Switch>
        <div id='page'></div>
        <Footer />
      </div>
    );

  }

}

export default App;
