import React from 'react';
import { Link } from 'react-router-dom'
import CSVReader from './FlatfileCSVReader'
import axios from 'axios'

class ProviderLp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      programs: [] || "There is no data to display yet"
    }
  }

  componentDidMount() {
    axios.get(`/user/provider/${this.props.uid}`).then((res) => {
      this.setState({
        programs: res.data
      })
      console.log(this.state.programs)
    })
  }

  render() {

    console.log(this.props.userData)
    return (
      <div>{this.props.userData && this.props.userData.role === "user"
        ? <div>
          <h1>Hello, {this.props.user.displayName || this.props.user.email}</h1>
          <CSVReader uid={this.props.uid} id='csv-button' />
          <a id="download-template" href="./provider_template.csv"
            download>
            <p>Click Here to Download Template</p>
          </a>
          <button id='signout-button' type="button" onClick={this.props.signOut}>Sign Out</button>
          <div id='db-info-container'>
            Placeholder for DB info
        </div>
        </div>
        :
        <div>
          <p>Please sign in on the VSAC page</p>
          <p><Link to='/vsac-user'>
            VSAC User
        </Link></p>
          <button id='signout-button' type="button" onClick={this.props.signOut}>Sign Out</button>
        </div>
      }
      </div>
    )
  }
}

export default ProviderLp;