import React from "react";
import { Link } from "react-router-dom";
import CSVReader from "./FlatfileCSVReader";
import axios from "axios";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import matchSorter from "match-sorter";
import Arrows from "../img/arrows1.png";
import UpdateRecordProvider from "./UpdateRecordProvider";

class ProviderLp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [] || "There is no data to display yet",
      updateModal: "none",
      updatedProgram: {},
    };
  }

  componentDidMount() {  // This will load all programs from the database into state that match the logged in user's firebase UID
    axios.get(`/user/provider/${this.props.uid}`).then((res) => {
      console.log(res);
      this.setState({
        programs: res.data,
      });
    });
  }

  deleteRow = (index) => {  // This method removed a row from the React table
    let copyPrograms = [...this.state.programs];
    copyPrograms.splice(index, 1);
    this.setState({ programs: copyPrograms });
  };

  openUpdateModal = (evt) => { // Opens up the Update program modal form

    let _id = evt.target.dataset._id;
    let programToUpdate = this.state.programs.filter((program) => {
      return program._id === _id;
    });

    this.setState({
      updateModal: "inline",
      updatedProgram: programToUpdate[0],
    });
  };

  closeUpdateModal = (evt) => {  // Closes the update modal from above if no changes are needed
    evt.preventDefault();
    this.setState({
      updateModal: "none",
    });
  };

  updateInfo = (evt) => {  // This method sends changes to the database to update a program's info
    evt.preventDefault();
    let payLoad = this.state.updatedProgram;
    let idVariable = this.state.updatedProgram._id;

    axios.post(`/user/update/${idVariable}`, payLoad);
    this.setState({
      updateModal: "none",
    });
  };

  handleUpdateChange = (evt) => {  // Fills out Update modal with existing data and tracks changes to the data for possible updating
    evt.persist();
    this.setState((prevState) => ({
      updatedProgram: {
        ...prevState.updatedProgram,
        [evt.target.name]: evt.target.value,
      },
    }));
    console.log(evt.target.name);
  };

  render() {
    const columns = [   // This is setting up the structure of the display table
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Institution{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "providerName",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["providerName"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Program{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "program",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["program"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Institution Link{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "providerLink",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["providerLink"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Modality{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "modality",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["modality"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Cost{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "price",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["price"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              State{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "state",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["state"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Region{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "region",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["region"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Start Date{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "startDate",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["startDate"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              End Date{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "endDate",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["endDate"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Certification{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "certification",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["certification"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              VT Grant{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "VTGrant",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["VTGrant"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Pell Grant{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "pell",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["pell"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Record Created By{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "recordCreatedBy",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["recordCreatedBy"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Record Last Updated{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "lastUpdate",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["lastUpdate"] }),
        filterAll: true,
      },
      {
        Header: (
          <div id="table-div">
            <p id="table-header">
              Contact Email{" "}
              <img src={Arrows} className="arrows" title="sort" alt="sort" />
            </p>
            <p>Search:</p>
          </div>
        ),
        accessor: "contactEmail",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["contactEmail"] }),
        filterAll: true,
      },
      {
        Header: "Delete Records",
        Cell: (props) => {
          return (
            // This attaches a method to the table that allows the user to delete one of their records from the database/table
            <button
              className="delete-button"
              onClick={() => {
                axios.get(
                  `/user/delete/${this.state.programs[props.index]._id}`  
                );
                this.deleteRow(props.index);
              }}
            >
              Delete
            </button>
          );
        },
        sortable: false,
        filterable: false,
        width: 100,
        maxWidth: 100,
        minWidth: 100,
      },
      {
        Header: "Update Records",
        Cell: (props) => {
          return (
            // This attaches a button to the table that opens up the update modal
            <button
              data-_id={this.state.programs[props.index]._id}
              name="test"
              className="update-button"
              onClick={this.openUpdateModal}
            >
              {" "}
              Update Record
            </button>
          );
        },
        sortable: false,
        filterable: false,
        width: 140,
        maxWidth: 100,
        minWidth: 100,
      },
    ];

    return (
      <div> {/* If a user is logged in and they have the firebase 'role' of "user" their name will display*/}
        {this.props.userData && this.props.userData.role === "user" ? (
          <div>
            {this.props.firstName === undefined ||
            this.props.lastName === undefined ? (
              <h1>Hello, {this.props.user.email}</h1>
            ) : (
              <h1>
                Hello,{" "}
                {this.props.firstName + " " + this.props.lastName ||
                  this.props.user.email}
              </h1>
            )}
            {/* The CSVReader component will open up the Flatfile importer */}
            <CSVReader
              uid={this.props.uid}
              id="csv-button"
            />
            {/* Below is the link to the CSV template download */}
            <div className="button-container">
              <a id="download-template" href="./provider_template.csv" download> 
                <button className="download-button">
                  Click here to Download Template
                </button>
              </a>
              {/* This button is to sign the current user out */}
              <button
                className="signout-button"
                type="button"
                onClick={this.props.signOut}
              >
                Sign Out
              </button>
            </div>
            <div id="db-info-container"> {/* This is the display table for program data attached to user's firebase UID */}
              <ReactTable
                className="-striped -highlight"
                columns={columns}
                data={this.state.programs}
                sortable
                filterable
                defaultFilterMethod={(filter, row) =>
                  String(row[filter.id]) === filter.value
                }
                noDataText={"No Data To Display Yet"}
                defaultPageSize={10}
              ></ReactTable>
              {/* UpdateRecordProvider calls the program update modal */}
              <UpdateRecordProvider
                openUpdateModal={this.openUpdateModal}
                updateModal={this.state.updateModal}
                closeUpdateModal={this.closeUpdateModal}
                updatedProgram={this.state.updatedProgram}
                updateInfo={this.updateInfo}
                handleChange={this.handleUpdateChange}
              ></UpdateRecordProvider>
            </div>
          </div>
        ) : (  // If the current user is an 'admin' it will prompt them to log in on the VSAC portal
          <div className="vsac-lp">
            <p>
              Looks like you have a VSAC account...<br></br>Please go to the
              VSAC login page.
            </p>
            <div className="button-container">
              <Link to="/vsac-user">
                <button className="button">VSAC User</button>
              </Link>
              <button
                className="signout-button"
                type="button"
                onClick={this.props.signOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProviderLp;
