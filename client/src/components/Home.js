import React from "react";
import axios from "axios";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import matchSorter from "match-sorter";
import Arrows from '../img/arrows1.png'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
    };
  }

  componentDidMount() {
    axios.get("/user").then((res) => {
      console.log(res.data)
      this.setState({
        programs: res.data,
      });
    });
  }

  loadProgramPage = (progId) => {
    window.location.href = `/program/${progId}`;
  };

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
        filterAll: true,
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
        filterAll: true,
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
        filterAll: true,
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
        filterAll: true,
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
        filterAll: true,
      },
    ];

    return (
      <div className="main-container">
        <div className='content'>
          <div className='title' id='home'>
        <div className="line"></div>
        <h2>Certificate {'&'} Training <span>Programs</span></h2>
        <div className="line"></div>
        </div>
        <h4>Click on a program for more information</h4>
        <div id="db-info-container">
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
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, programPage) => {
                  let progId = rowInfo.row._original._id;

                  if (programPage) {
                    this.loadProgramPage(progId);
                    console.log(progId);
                  }
                },
              };
            }}
          ></ReactTable>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
