import React from 'react';
import { Link } from 'react-router-dom'
class Vsac extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
  
      }
    }
  
    render() {
      return (
        <div className="main-container">
          <h1>This is the page for VSAC users</h1>
          <Link to='/'>Home</Link>
        </div>
      );
    }
  }
  
  export default Vsac;