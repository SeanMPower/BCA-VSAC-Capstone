import React from 'react';
import { Link } from 'react-router-dom'
import { fireApp } from '../assets/firebaseConfig';
import { fireAuth } from '../assets/firebaseConfig';
import { fireData } from '../assets/firebaseConfig';
import SignUp from './SignUp'
import SignIn from './SignIn'
import ProviderLp from './ProviderLp'
// import axios from 'axios'

class Provider extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      user: fireApp.auth().currentUser,
      email: '',
      password: '',
      newEmail: '',
      newPassword: '',
      uid: '',
      userData: ''
    }
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
      if (this.state.userData !== data) {
        this.setState({ userData: data })
        // console.log(data)
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
      this.setState({ user: res.user, uid: res.user.uid })
      console.log(res.user.uid)
    })
  }

  //signing up with email and password
  emailSignup = (evt) => {
    evt.preventDefault()

    let newFormName = this.state.name
    let newFormEmail = this.state.newEmail
    let newFormPassword = this.state.newPassword
    let confirmFormPassword = this.state.confirmPassword

    console.log(newFormEmail)
    console.log(newFormPassword)

    newFormPassword === confirmFormPassword ? fireApp.auth().createUserWithEmailAndPassword(newFormEmail, newFormPassword).then(res => {
      this.setState({ user: res.user })
    }).catch(error => {
      console.log(error.message)
    })
      : alert("Passwords must match!")
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

  render() {
    console.log(fireApp)
    console.log(fireAuth)
    console.log(this.state.userData)
    return (
      <div className="main-container">
        <div id='navbar'>
          <Link to='/' className='btn'>
            Home
        </Link>
          <div id='space'>
          </div>
          {this.state.user ?
            <div className='msg'>
              Signed in as: {this.state.user.displayName || this.state.user.email}
            </div> : <div />
          }
        </div>
        <h1>This is the page for Provider users</h1>
        <div className='main-container'>
          {this.state.user
            ? <ProviderLp user={this.state.user}
              signOut={this.signOut}
              uid={this.state.uid}
              userData={this.state.userData}
            />
            : <div>
              <h4>Please Sign in</h4>
              <SignIn emailSignin={this.emailSignin} handleChange={this.handleChange} />
              <SignUp emailSignup={this.emailSignup} handleChange={this.handleChange} />
            </div>}
        </div>
      </div>
    )
  }
}


export default Provider;