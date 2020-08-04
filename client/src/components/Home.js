import React from 'react';
import { Link } from 'react-router-dom'


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="main-container" >
        <h1>Please Log in as a VSAC User or a Provider</h1>
        <div id='links'>
        <Link to='/temporary-vsac'>
          <button color='green' className='button'>
            <span>VSAC User</span>
          </button>
        </Link>
        <Link to='/temporary-provider'>
        <button color='green' className='button'>
            <span>Provider User</span>
          </button>
        </Link>
        <Link to='/temporary-db'>
        <button color='green' className='button'>
            <span>Database Content</span>
          </button>
        </Link>
        </div>
      </div>
    );
  }
}

export default Home;