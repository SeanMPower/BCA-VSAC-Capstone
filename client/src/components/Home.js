import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactTable from "react-table-v6"
import "react-table-v6/react-table.css"



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
    const columns = [
      {
        Header: "Provider",
        accessor: "providerName"
      },
      {
        Header: "Program",
        accessor: "program"
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
        Header: "Cost",
        accessor: "price"
      }
    ]

    return (
      <div className="main-container" >
        <h1>List of Non-Degree and Training Programs</h1>
        <div id='links'>

        </div>
        <div id='db-info-container'>
          <ReactTable
            columns={columns}
            data={this.state.programs}  
          >

          </ReactTable>
        </div>
      </div>
    );
  }
}

export default Home;