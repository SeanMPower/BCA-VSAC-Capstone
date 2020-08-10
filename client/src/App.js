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
import { fireApp } from './assets/firebaseConfig';
import { fireAuth } from './assets/firebaseConfig';
import { fireData } from './assets/firebaseConfig';


class App extends React.Component {

  handleClose = () => {
    this.setState(() => {
      return {
        modalDisplay: false,
      };
    });
  };

  showModal = () => {
    this.setState(() => {
      return {
        modalDisplay: true,
      }
    })
  }

    //gets user data from database and sets it in state
    componentDidMount() {
      if (this.state.user) {
        fireData.ref('/users/' + this.state.user.uid).once('value', (data) => {
          this.setState({
            userData: data.val()
          })
        })
      }
    }
  
    //gets data for users when they sign in
    async componentDidUpdate() {
      if (this.state.user) {
        let data = await fireData.ref('/users/' + this.state.user.uid).once('value').then(data => data.val())
        if (this.state.userData.role !== data.role) {
          this.setState({ userData: data })
          // console.log(data)
        }
      }
    }

    handleChange = (evt) => {
      this.setState({ [evt.target.name]: evt.target.value });
      console.log(evt.target.value)
    }
  
    //Signing in with email and password
    emailSignin = (evt) => {
      evt.preventDefault()
  
      let formEmail = this.state.email
      let formPassword = this.state.password
  
      fireApp.auth().signInWithEmailAndPassword(formEmail, formPassword).then(res => {
        this.setState({ user: res.user, uid: res.user.uid })
        console.log(res.user.uid)
      })
    }
  
    //signing up with email and password
    emailSignup = async (evt) => {
      evt.preventDefault()
  
      let newFormName = this.state.name
      let newFormEmail = this.state.newEmail
      let newFormPassword = this.state.newPassword
      let confirmFormPassword = this.state.confirmPassword
  
      console.log(newFormEmail)
      console.log(newFormPassword)
  
      newFormPassword === confirmFormPassword ? await fireApp.auth().createUserWithEmailAndPassword(newFormEmail, newFormPassword).then(res => {
        this.setState({ user: res.user })
      }).catch(error => {
        console.log(error.message)
      })
        : alert("Passwords must match!");
  
      fireData.ref('/users/' + this.state.user.uid).set({role: "user"}).then(res => {
        this.setState({userData: {role: "user"}})
        console.log(res)
      })
      
    }
  
    signOut = (evt) => {
      evt.preventDefault()
  
      fireApp.auth().signOut().then(res => {
        this.setState({ user: '' })
  
        console.log(res)
      }).catch(error => {
        console.log(error.message)
      })
    }

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      email: '',
      password: '',
      newEmail: '',
      newPassword: '',
      uid: '',
      userData: '',
      modalDisplay: false
    }
  }

  render() {
    // console.log(authApp)
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path ='/vsac-user' render={ () => (< Vsac signOut={this.signOut} emailSignin={this.emailSignin} handleChange={this.handleChange} user = {this.state.user} userData={this.state.userData}/>)} />
          <Route path ='/provider-user' render={ () => (< Provider handleClose={this.handleClose} signOut={this.signOut} emailSignin={this.emailSignin} handleChange={this.handleChange} user = {this.state.user} userData={this.state.userData} uid={this.state.uid} modalDisplay={this.state.modalDisplay} emailSignup={this.emailSignup} toggleModal={this.showModal} />)} />
          <Route path='/database' component={Dbpage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );

  }

}

export default App;
