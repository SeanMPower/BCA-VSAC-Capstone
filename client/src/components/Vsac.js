import React from 'react';
import { Link } from 'react-router-dom'
import { fireApp } from '../assets/firebaseConfig';
import { fireAuth } from '../assets/firebaseConfig';
import SignUp from './SignUp'
import SignIn from './SignIn'
import VsacLp from './VsacLp'


class Vsac extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: '',
      email: '',
      password: '',
      newEmail: '',
      newPassword: ''
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
      this.setState({ user: res.user })
    })
  }

  //signing up with email and password
  emailSignup = (evt) => {
    evt.preventDefault()

    let newFormEmail = this.state.newEmail
    let newFormPassword = this.state.newPassword

    console.log(newFormEmail)
    console.log(newFormPassword)

    fireApp.auth().createUserWithEmailAndPassword(newFormEmail, newFormPassword).then(res => {
      this.setState({ user: res.user })
    }).catch(error => {
      console.log(error.message)
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

  //resets form values
  resetUserInputs = () => {
    this.setState({
      user: '',
      password: ''
    })
  }

  render() {
    // console.log(fireApp)
    // console.log(fireAuth)
    return (
      <div className="main-container">
        <h1>This is the page for VSAC users</h1>
        <Link to='/'>Home</Link>
        <div>
          {this.state.user
            ? <VsacLp user={this.state.user}
            signOut={this.signOut}
            // userData={this.state.userData} 
            />
            : <div>
              <h4>Please Sign in</h4>
              <SignIn emailSignin={this.emailSignin} handleChange={this.handleChange} />
              <SignUp emailSignup={this.emailSignup} handleChange={this.handleChange} />
            </div>}
        </div>
      </div>
    );
  }
}

export default Vsac;