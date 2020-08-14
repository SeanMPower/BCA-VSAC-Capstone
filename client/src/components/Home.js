import React from "react";
import axios from "axios";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import matchSorter from 'match-sorter'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
    };
  }

  

  componentDidMount() {
    axios.get("/home").then((res) => {
      this.setState({
        programs: res.data,
      });
    });
  }

  loadProgramPage = (progId) => {
    window.location.href=(`/program/${progId}`)  
  }

  

  render() {
      
    const columns = [
      {
        Header: "Provider",
        accessor: "providerName",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["providerName"] }),
        filterAll: true,
      },
      {
        Header: "Program",
        accessor: "program",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["program"] }),
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
        Header: "Cost",
        accessor: "price",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["price"] }),
        filterAll: true
      }
    ];

    return (
      <div className="main-container">
        <h1>List of Certificate and Training Programs</h1>
        <h4>Click on a program for more info</h4>
        <div id="links"></div>
        <div id="db-info-container">
          <ReactTable
            className="-striped -highlight"
            columns={columns}
            data={this.state.programs}
            sortable
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value}
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
    );
  }
}

export default Home;
