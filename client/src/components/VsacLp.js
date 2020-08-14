import React from 'react';
import { Link } from 'react-router-dom';
import { columns } from './Home.js';
import ReactTable from "react-table-v6"
import "react-table-v6/react-table.css"
import axios from 'axios'


export default class VsacLp extends React.Component {
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
// Displays welcome message & table if admin, else prompts user to sign from Provider Login
    <div>{this.props.userData.role === "admin"
    ? <div>
    <h1>Hello, {this.props.user.displayName || this.props.user.email}</h1>
    <button className='signout-button'type="button" onClick={this.props.signOut}>Sign Out</button>
    <div id='db-info-container'>
    <ReactTable
            columns={columns}
            data={this.state.programs}  
          />
      </div>
  </div>
  : 
  <div className='vsac-lp'>
        <p>Please sign in on the Provider page</p>
        <div className='button-container'><Link to='/provider-user'>
          <button className='button'>Provider User</button>
        </Link>
        <button className='signout-button' type="button" onClick={this.props.signOut}>Sign Out</button>
        </div>
      </div>
    }
    </div>
  )
}
}

