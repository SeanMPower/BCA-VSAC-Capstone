import React from 'react';
import { Link } from 'react-router-dom'

let providerName = 'Provider User'


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="main-container" >
        <div id='navbar'>
        <Link to='/vsac-user' className='btn'>
            VSAC User
        </Link>
        <Link to='/provider-user' className='btn'>
          {providerName}
        </Link>
        <div id='space'>
        </div>
        </div>
        <h1>Please Log in as a VSAC User or a Provider</h1>
        <div id='links'>

        </div>
        <div id='db-info-container'>
          Placeholder for DB info
        </div>
      </div>
    );
  }
}

export default Home;