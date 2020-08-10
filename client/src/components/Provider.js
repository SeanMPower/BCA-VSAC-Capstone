import React from 'react';
import { Link } from 'react-router-dom'
// import { fireApp } from '../assets/firebaseConfig';
// import { fireAuth } from '../assets/firebaseConfig';
// import { fireData } from '../assets/firebaseConfig';
import SignUp from './SignUp'
import SignIn from './SignIn'
import ProviderLp from './ProviderLp'
import axios from 'axios'

class Provider extends React.Component {

  componentDidMount() {
    axios.get('/provider').then((res) => {
      console.log(res)
    })
  }


  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="main-container" >
        <div id='navbar'>
          <Link to='/' className='btn'>
            Home
        </Link>
          <div id='space'>
          </div>
          {this.props.user ?
            <div className='msg'>
              Signed in as: {this.props.user.displayName || this.props.user.email}
            </div> : <div />
          }
        </div>
        <h1>This is the page for Provider users</h1>
        <div className='main-container'>
          {props.user
            ? <ProviderLp user={this.props.user}
              signOut={this.props.signOut}
              uid={this.props.uid}
              userData={this.props.userData}
            />
            : <div>
              <h4>Please Sign in</h4>
              <SignIn emailSignin={this.props.emailSignin} handleChange={this.props.handleChange} />
              <SignUp emailSignup={this.props.emailSignup} handleChange={this.props.handleChange} />
            </div>}
        </div>
      </div >
    )
  }

}


export default Provider;