import React from 'react';
import { Link } from 'react-router-dom'
import CSVReader from './FlatfileCSVReader'
import axios from 'axios'
import ReactTable from "react-table-v6"
import "react-table-v6/react-table.css"
import matchSorter from 'match-sorter'


class ProviderLp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      programs: [] || "There is no data to display yet",
      updateModal: false
    }
  }

  componentDidMount() {
    axios.get(`/user/provider/${this.props.uid}`).then((res) => {
      this.setState({
        programs: res.data
      })
    })
  }

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

  openUpdateModal = () => {
    this.setState({
      updateModal: true
    })
  }


  render() {
    const columns = [
      {
        Header: <div id="table-div"><p id="table-header">Institution <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p>
          <p>Search:</p></div>,
        accessor: "providerName",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["providerName"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Program <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "program",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["program"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Institution Link <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "providerLink",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["providerLink"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Modality <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "modality",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["modality"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Price <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "price",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["price"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">State <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "state",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["state"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Region <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "region",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["region"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Start Date <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "startDate",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["startDate"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">End Date <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "endDate",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["endDate"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Certification <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "certification",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["certification"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">VT Grant <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "VTGrant",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["VTGrant"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Pell Grant <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "pell",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["pell"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Record Created By <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "recordCreatedBy",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["recordCreatedBy"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Record Last Updated <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "lastUpdate",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["lastUpdate"] }),
        filterAll: true
      },
      {
        Header: <div id="table-div"><p id="table-header">Contact Email <img
          src={Arrows}
          className="arrows"
          title="sort"
          alt="sort"
        /></p><p>Search:</p></div>,
        accessor: "contactEmail",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["contactEmail"] }),
        filterAll: true
      },
      {
        Header: "Delete Records",
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
      },
      {
        Header: "Update Records",
        Cell: props => {
          return (
            <button className="delete-button" onClick={() => {
              // this.props.openUpdateModal
            }} >Update Record</button>
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
          <a id="download-template" href="./provider_template.csv"
            download>
            <p>Click Here to Download Template</p>
          </a>
          <button id='signout-button' type="button" onClick={this.props.signOut}>Sign Out</button>
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
            <UpdateRecord
            openUpdateModal={this.state.openUpdateModal}
            // onSubmit={this.updateInfo}
            >
            </UpdateRecord>
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