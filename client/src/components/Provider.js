import React from 'react';
import { Link } from 'react-router-dom'
import { fireApp, fireAuth } from './assets/firebaseConfig';
import SignUp from './SignUp.js'
import SignIn from './SignIn.js'
import Welcome from './Welcome.js'
import axious from 'axious'

// import { myData } from './assets/firebaseConfig';
// import { googleProvider } from './assets/firebaseConfig';

class Provider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: fireApp.auth().currentUser,
      email: '',
      password: '',
      newEmail: '',
      newPassword: ''
    }
  }

  componentDidMount() {
    // if (this.state.user) {
    //   myData.ref('/users/' + this.state.user.uid).once('value', (data) => {
    //     this.setState({
    //       userData: data.val()
    //     })
    //   })
    // }

    post('./API/User.js').then((res) => {
      return res.json()
    })
      .then((userList) => {

        this.setState({ userId: user.id })
      })
  }

  async componentDidUpdate() {
    // let data = await myData.ref('/users/' + this.state.user.uid).once('value').then(data => data.val())


    // if (this.state.userData !== data) {
    //   this.setState({ userData: data })
    // }
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
              <SignUp emailSignup={this.emailSignup} handleChange={handleChange}/>
              <SignIn emailSignin={this.emailSignin} handleChange={handleChange}/>
            </div>}
        </div>
        <div id='temporary-form'>This will be a form</div>
      </div>
    );
  }
}

export default Provider;