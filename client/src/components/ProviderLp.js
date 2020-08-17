import React from 'react';
import { Link } from 'react-router-dom'
import CSVReader from './FlatfileCSVReader'
import axios from 'axios'
import ReactTable from "react-table-v6"
import "react-table-v6/react-table.css"
import matchSorter from 'match-sorter'


class ProviderLp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [] || "There is no data to display yet"

    }
  }

  componentDidMount() {
    axios.get(`/user/provider/${this.props.uid}`).then((res) => {
      this.setState({
        programs: res.data
      })
    })
  }

  // displayPrograms = (programs) => {
  //   if (!programs.length) return null;

  //   return programs.map((program, index) =>
  //     <div key={index}>
  //       <h3>{program.providerName}</h3>
  //       <p>{program.program}</p>
  //     </div>
  //   )
  // };

  updateTable(data) {
    this.setState({
      programs: data
    })
  }

  deleteRow = (index) => {
    let copyPrograms = [...this.state.programs]
    copyPrograms.splice(index, 1)
    this.setState({ programs: copyPrograms })
  }


  render() {
    const columns = [
      {
        Header: "Institution",
        accessor: "providerName",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["providerName"] }),
        filterAll: true
      },
      {
        Header: "Program",
        accessor: "program",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["program"] }),
        filterAll: true
      },
      {
        Header: "Institution Link",
        accessor: "providerLink",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["providerLink"] }),
        filterAll: true
      },
      {
        Header: "Modality",
        accessor: "modality",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["modality"] }),
        filterAll: true
      },
      {
        Header: "Price",
        accessor: "price",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["price"] }),
        filterAll: true
      },
      {
        Header: "State",
        accessor: "state",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["state"] }),
        filterAll: true
      },
      {
        Header: "Region",
        accessor: "region",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["region"] }),
        filterAll: true
      },
      {
        Header: "Start Date",
        accessor: "startDate",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["startDate"] }),
        filterAll: true
      },
      {
        Header: "End Date",
        accessor: "endDate",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["endDate"] }),
        filterAll: true
      },
      {
        Header: "Certification",
        accessor: "certification",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["certification"] }),
        filterAll: true
      },
      {
        Header: "VT Grant",
        accessor: "VTGrant",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["VTGrant"] }),
        filterAll: true
      },
      {
        Header: "Pell Grant",
        accessor: "pell",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["pell"] }),
        filterAll: true
      },
      {
        Header: "Record Created By",
        accessor: "recordCreatedBy",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["recordCreatedBy"] }),
        filterAll: true
      },
      {
        Header: "Record Last Updated",
        accessor: "lastUpdate",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["lastUpdate"] }),
        filterAll: true
      },
      {
        Header: "Contact Email",
        accessor: "contactEmail",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["contactEmail"] }),
        filterAll: true
      },
      {
        Header: "Actions",
        Cell: props => {
          return (
            <button className="delete-button" onClick={() => {
              axios.get(`/user/delete/${this.state.programs[props.index]._id}`)
              this.deleteRow(props.index) 
            }} >Delete</button>
          )
        },
        sortable: false,
        filterable: false,
        width: 100,
        maxWidth: 100,
        minWidth: 100
      }
    ]

    return (
      <div>{this.props.userData && this.props.userData.role === "user"
        ? <div>
          {this.props.firstName === undefined || this.props.lastName === undefined ? <h1>Hello, {this.props.user.email}</h1> : <h1>Hello, {this.props.firstName + ' ' + this.props.lastName || this.props.user.email}</h1>}
          <CSVReader uid={this.props.uid} id='csv-button' update={this.updateTable}/>
          <div className="button-container">
              <a id="download-template" href="./provider_template.csv" download>
                <button className="download-button">
                  Click here to Download Template
                </button>
              </a>
              <button
                className="signout-button"
                type="button"
                onClick={this.props.signOut}
              >
                Sign Out
              </button>
              </div>
              <div id='db-info-container'>
            <ReactTable
              className="-striped -highlight"
              columns={columns}
              data={this.state.programs}
              sortable
              filterable
              defaultFilterMethod={(filter, row) =>
                String(row[filter.id]) === filter.value}
              noDataText={"No Data To Display Yet"}
              defaultPageSize={10}
            >
            </ReactTable>
          </div>
            </div>
        :
        <div className='vsac-lp'>
        <p>Looks like you have a VSAC account...<br></br>Please go to the VSAC login page.</p>
        <div className='button-container'><Link to='/vsac-user'>
          <button className='button'>VSAC User</button>
        </Link>
        <button className='signout-button' type="button" onClick={this.props.signOut}>Sign Out</button>
        </div>
      </div>
      }
      </div>
    );
  }
}

export default ProviderLp;
