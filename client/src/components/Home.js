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
    axios.get('/home').then((res) =>  {
      this.setState({
        programs: res.data
      })
    })



  }



  render() {
    return (
      <div className="main-container" >
        <h1>List of Non-Degree and Training Programs</h1>
        <div id='links'>

        </div>
        <div id='db-info-container'>
          {/* <table id="programTable">
            <tr class="header">
              <th style={{width: 10%}}>Provider</th>
            </tr>
          </table> */}
        </div>
      </div>
    );
  }
}

export default Home;