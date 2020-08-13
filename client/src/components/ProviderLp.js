import React from 'react';
import { Link } from 'react-router-dom'
import CSVReader from './FlatfileCSVReader'
import axios from 'axios'
import ReactTable from "react-table-v6"
import "react-table-v6/react-table.css"


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

  displayPrograms = (programs) => {
    if (!programs.length) return null;

    return programs.map((program, index) =>
      <div key={index}>
        <h3>{program.providerName}</h3>
        <p>{program.program}</p>
      </div>
    )
  };

  render() {
    const columns = [
      {
        Header: "Institution",
        accessor: "providerName"
      },
      {
        Header: "Program",
        accessor: "program"
      },
      {
        Header: "Institution Link",
        accessor: "providerLink"
      },
      {
        Header: "Modality",
        accessor: "modality"
      },
      {
        Header: "Price",
        accessor: "price"
      },
      {
        Header: "State",
        accessor: "state"
      },
      {
        Header: "Region",
        accessor: "region"
      },
      {
        Header: "Start Date",
        accessor: "startDate"
      },
      {
        Header: "End Date",
        accessor: "endDate"
      },
      {
        Header: "Certification",
        accessor: "certification"
      },
      {
        Header: "VT Grant",
        accessor: "VTGrant"
      },
      {
        Header: "Pell Grant",
        accessor: "pell"
      },
      {
        Header: "Record Created By",
        accessor: "recordCreatedBy"
      },
      {
        Header: "Record Last Updated",
        accessor: "lastUpdate"
      },
      {
        Header: "Contact Email",
        accessor: "contactEmail"
      },
    ]

    return (
      <div>{this.props.userData && this.props.userData.role === "user"
        ? <div>
          {this.props.firstName === undefined || this.props.lastName === undefined ? <h1>Hello, {this.props.user.email}</h1> : <h1>Hello, {this.props.firstName + ' ' + this.props.lastName || this.props.user.email}</h1>}
          <CSVReader uid={this.props.uid} id='csv-button' />
          <a id="download-template" href="./provider_template.csv"
            download>
            <p>Click Here to Download Template</p>
          </a>
          <button id='signout-button' type="button" onClick={this.props.signOut}>Sign Out</button>
          {/* <div id='db-info-container'>
            {this.displayPrograms(this.state.programs)}
            Placeholder for DB info
        </div> */}

          <ReactTable
            columns={columns}
            data={this.state.programs}>
            {/* sortable: true
            filterable: true */}

          </ReactTable>
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