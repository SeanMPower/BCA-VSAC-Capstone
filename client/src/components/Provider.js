import React from 'react';
import { Link } from 'react-router-dom'
class Provider extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
  
      }
    }
  
    render() {
      return (
        <div className="main-container">
          <h1>This is the page for Provider users</h1>
          <Link to='/'>Home</Link>
          <div id='temporary-form'>This will be a form</div>
        </div>
      );
    }
  }
  
  export default Provider;