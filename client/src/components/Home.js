import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      programs: []
    }
  }

  componentDidMount() {
    axios.get('/home').then((res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <div className="main-container" >
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