import React from 'react';
import { Link } from 'react-router-dom'
import fireApp from './firebaseConfig';
import fireAuth from './firebaseConfig';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Welcome from './Welcome'
// import axios from 'axios'
import Template from './provider-template.csv'
import CSVReader from './FlatfileCSVReader'


// import { myData } from './assets/firebaseConfig';
// import { googleProvider } from './assets/firebaseConfig';

class Provider extends React.Component {

  constructor() {
    super()
    this.state = {
      user: '',
      // user: fireApp.auth().currentUser,
      email: '',
      password: '',
      newEmail: '',
      newPassword: ''
    }
  }


  //fetching data
  // post('./API/User.js').then((res) => {
  //     return res.json()
  //   })
  //     .then((userList) => {
  //       this.setState({ userId: user.id })
  //     })
  // }

  //componentDidMount() {
  // if (this.state.user) {
  //   myData.ref('/users/' + this.state.user.uid).once('value', (data) => {
  //     this.setState({
  //       userData: data.val()
  //     })
  //   })
  // }

  //componentDidUpdate() {
  // let data = await myData.ref('/users/' + this.state.user.uid).once('value').then(data => data.val())
  // if (this.state.userData !== data) {
  //   this.setState({ userData: data })
  // }
  //}

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
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
    let newFormPassword = this.state.newFormPassword

    fireApp.auth().createUserWithEmailAndPassword(newFormEmail, newFormPassword).then(res => {
      this.setState({ user: res.user })
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
    console.log(fireApp)
    console.log(fireAuth)
    return (
      <div className="main-container">
        <h1>This is the page for Provider users</h1>
        <Link to='/'>Home</Link>
        <div>
          {this.state.user
            ? <Welcome user={this.state.user}
            // userData={this.state.userData} 
            />
            : <div>
              <h4>Please Sign in</h4>
              <SignUp emailSignup={this.emailSignup} handleChange={this.handleChange} />
              <SignIn emailSignin={this.emailSignin} handleChange={this.handleChange} />
              <a href={Template}
                        download="Donwload Template">
                        <p>Donwload Template</p>
                    </a>
              <CSVReader />
            </div>}
        </div>
      </div>
    )
  }
}


export default Provider;