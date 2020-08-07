import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount

  render() {
    return (
      <div className="main-container" >
        <h1 id='top-h1'>Welcome to the VSAC Non-Degree Program Database Page</h1>
        <h2>Please Log in as a VSAC User or a Provider</h2>
        <div id='links'>

        </div>
        <div id='db-info-container'>
          <div className='rotate'>Database content goes here ʕ•ᴥ•ʔ</div>
        </div>
      </div>
    );
  }
}

export default Home;