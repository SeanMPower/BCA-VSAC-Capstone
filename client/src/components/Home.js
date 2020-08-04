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
        <h1>Please Log in</h1>
        <Link to='/temporary-vsac'>VSAC User</Link>
        <Link to='/temporary-provider'>Provider User</Link>
        <Link to='/temporary-db'>Database Content</Link>
      </div>
    );
  }
}

export default Home;