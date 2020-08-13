import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router'
import { Header } from './components/Header.js'
import Home from './components/Home.js'
import Vsac from './components/Vsac.js'
import Provider from './components/Provider.js'
import ErrorPage from './components/ErrorPage.js'
import Footer from './components/Footer.js'
// import authApp from './assets/firebaseConfig.js'
import Dbpage from './components/Database.js'
import { fireApp } from './assets/firebaseConfig';
import { fireData } from './assets/firebaseConfig';


class App extends React.Component {

//Sets modal display to opposite of its prevstate, sets error to none. disables scrolling when modal is opened.
  toggleModal = () => {
    this.setState(prevState => {
      return {
        modalDisplay: !prevState.modalDisplay,
        error: ''
      }
    }, () => {
      if (this.state.modalDisplay === true) {
        this.windowOffset = window.scrollY
        document.body.setAttribute('style', `position: fixed; top: -${this.windowOffset}px; left: 0; right: 0`)
      } else {
        document.body.setAttribute('style', '')
        window.scrollTo(0, this.windowOffset)
      }
    })
  }

    //Gets user data from database and sets it in state
    componentDidMount() {
      console.log(this.state.user)
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
        this.setState({
          firstName: data.firstName,
          lastName: data.lastName
        })
        if (this.state.userData.role !== data.role) {
          this.setState({ userData: data })
        }
      }
    }

    handleChange = (evt) => {
      this.setState({ [evt.target.name]: evt.target.value });
    }
  
    //Signing in with email and password
    emailSignin = (evt) => {
      evt.preventDefault()
  
      let formEmail = this.state.email
      let formPassword = this.state.password
  
      fireApp.auth().signInWithEmailAndPassword(formEmail, formPassword).then(res => {
        this.setState({ user: res.user, uid: res.user.uid, signedIn: true, firstName: res.firstName, lastName: res.lastName})
        console.log(res.user.uid)
      }).catch(error => {
        this.setState({error: error.message})
      })
    }
  
    //signing up with email and password
    emailSignup = async (evt) => {
      evt.preventDefault()
  
      let newFormOrg = this.state.newOrganization
      let newFormName = this.state.newFirstname
      let newFormLastName = this.state.newLastname
      let newFormEmail = this.state.newEmail
      let newFormPassword = this.state.newPassword
      let confirmFormPassword = this.state.confirmPassword

      console.log(newFormEmail)
      console.log(newFormPassword)
  
      newFormPassword === confirmFormPassword ? await fireApp.auth().createUserWithEmailAndPassword(newFormEmail, newFormPassword).then(res => {
        this.setState({ user: res.user, signedIn: true })
      }).catch(error => {
        this.setState({error: error.message})
      })
        : alert("Passwords must match!")
  
      fireData.ref('/users/' + this.state.user.uid).set({role: "user", firstName: newFormName, lastName: newFormLastName}).then(res => {
        // this.setState(res)
        this.setState({userData: {role: "user"}})
        // user: res.user, uid: res.user.uid, signedIn: true, firstName: res.firstName, lastName: res.lastName})
        console.log(res)
      })
      
    }
  
    signOut = (evt) => {
      evt.preventDefault()
  
      fireApp.auth().signOut().then(res => {
        this.setState({
          newFirstname: '',
          newLastname: '',
          firstName: '',
          lastName: '',
          user: '',
          email: '',
          password: '',
          newEmail: '',
          newPassword: '',
          uid: '',
          userData: '',
          modalDisplay: false,
          signedIn: false,
          error: ''
        })
  
        console.log(res)
      }).catch(error => {
        this.setState({error: error.message})
      })
    }

  constructor(props) {
    super(props)
    this.state = {
      newFirstname: '',
      newLastname: '',
      firstName: '',
      lastName: '',
      user: '',
      email: '',
      password: '',
      newEmail: '',
      newPassword: '',
      uid: '',
      userData: '',
      modalDisplay: false,
      signedIn: false,
      error: ''
    }
    this.windowOffset = 0
  }

  render() {
    return (
      <div className="App" >
        <Header signedIn={this.state.signedIn} email={this.state.email} signOut={this.signOut} user={this.state.user}/>
        <div className='homepage'></div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path ='/vsac-user' render={ () => (< Vsac signOut={this.signOut} emailSignin={this.emailSignin} handleChange={this.handleChange} user = {this.state.user} userData={this.state.userData} errorMessage={this.state.error}/>)} />
          <Route path ='/provider-user' render={ () => (< Provider errorMessage={this.state.error} handleClose={this.toggleModal} signOut={this.signOut} emailSignin={this.emailSignin} handleChange={this.handleChange} user = {this.state.user} userData={this.state.userData} uid={this.state.uid} modalDisplay={this.state.modalDisplay} emailSignup={this.emailSignup} toggleModal={this.toggleModal} firstName={this.state.firstName} lastName={this.state.lastName} />)} />
          <Route path='/database' component={Dbpage} />
          <Route component={ErrorPage} />
        </Switch>
        <div id='page'></div>
        <Footer />
      </div>
    );
  }
}

export default App;
