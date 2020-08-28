import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactTable from "react-table-v6"
import "react-table-v6/react-table.css"
import matchSorter from 'match-sorter'
import { CSVLink } from "react-csv";
import Arrows from '../img/arrows1.png'
import UpdateRecordVsac from './UpdateRecordVsac'

export default class VsacLp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      programs: [] || "There is no data to display yet",
      updateModal: "none",
      updatedProgram: {}
    }
  }

  componentDidMount() {  // This is pulling all programs in the database and setting them in state for display on the react table
    axios.get("/user/vsac").then((res) => {
      this.setState({
        programs: res.data
      });
    });
  }

  deleteRow = (index) => { // This will delete a record from the react table
    let copyPrograms = [...this.state.programs]
    copyPrograms.splice(index, 1)
    this.setState({ programs: copyPrograms })
  }

  openUpdateModal = (evt) => { // This method opens up the Update modal to allow you to modify program data
   
    let _id = evt.target.dataset._id
    let programToUpdate = this.state.programs.filter((program) => {
      return program._id === _id

    })

    this.setState({
      updateModal: "inline",
      updatedProgram: programToUpdate[0]
    })
  }

  closeUpdateModal = (evt) => { // This method closes the update modal
    evt.preventDefault()
    this.setState({
      updateModal: "none"
    })
  }

  updateInfo = (evt) => { // This method will take changes to the update modal form and send them to the database to update a particular record
    evt.preventDefault()
    let payLoad = this.state.updatedProgram
    let idVariable = this.state.updatedProgram._id
    
    axios.post(`/user/update/${idVariable}`, payLoad)
      this.setState({
        updateModal: "none"
      })        
  }

  handleUpdateChange = (evt) => {  // This loads current data into update form tracks changes to be updated
    evt.persist()
    this.setState((prevState) => ({
      updatedProgram: {
        ...prevState.updatedProgram, [evt.target.name]: evt.target.value
      }
    }));
  }

  render() {

    const columns = [ // This is setting up the React table structure
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
        Header: <div id="table-div"><p id="table-header">Cost <img
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
        id: 'viewable',
        Header: <div id="table-div"><p id="table-header">Visible on Home Page<img
        src={Arrows}
        className="arrows"
        title="sort"
        alt="sort"
      /></p><p>Search:</p></div>,
        accessor: d => d.viewable.toString(),
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["viewable"] }),
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
            <button data-_id={this.state.programs[props.index]._id} name="test" className="update-button" onClick={
              this.openUpdateModal
            } > Update Record</button>
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
      <> {/* This ternary is checking for the role of the currently logged in user. If 'admin', the VSAC landing page will display. If not, then they will be prompted to use the Institution portal */}
      {this.props.userData.role === "admin"
        ? <div>
          <h1 id='welcome-msg'>Hello, {this.props.user.displayName || this.props.user.email}</h1>
          <div id='db-info-container'>
            <div id='csvlink-container'>  {/* The CSVLink component gathers all data from the database and puts it in a CSV file for download */}
              <CSVLink data={this.state.programs}
                columns={columns}
                filename="training-data.csv" className='button' id='export-btn'>
                Export Data
              </CSVLink>
            </div>  {/* ReactTable is the program display table */}
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
            {/* UpdateRecordVsac is the update program modal */}
            <UpdateRecordVsac  
              openUpdateModal={this.openUpdateModal}
              updateModal={this.state.updateModal}
              closeUpdateModal={this.closeUpdateModal}
              updatedProgram={this.state.updatedProgram}
              updateInfo={this.updateInfo}
              handleChange={this.handleUpdateChange}
            >
            </UpdateRecordVsac>
          </div>
        </div>
        :
        <> {/* This is what will be displayed if they are not an authorized vsac 'admin' */}
        <div className='vsac-lp'>
        <p>Looks like you have a provider account...<br></br>Please go to the Institution portal.</p>
        <div className='button-container'><Link to='/provider-user'>
          <button className='button'>Provider User</button>
        </Link>
        <button className='signout-button' type="button" onClick={this.props.signOut}>Sign Out</button>
        </div>
        </div>
        </>
      }
  </>
    )
  }
}