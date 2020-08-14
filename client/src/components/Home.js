import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReactTable from "react-table-v6"
import "react-table-v6/react-table.css"


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
    Header: "Certification/Credential",
    accessor: "certification"
  },
  {
    Header: "State",
    accessor: "state"
  },
  {
    Header: "County",
    accessor: "region"
  },
  {
    Header: "Modality",
    accessor: "modality"
  },
  {
    Header: "Cost",
    accessor: "price"
  },
  {
    Header: "Pell Grant Eligible?",
    accessor: "pell"
  },
  {
    Header: "VT Grant Eligibile?",
    accessor: "VTGrant"
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
    Header: "Website",
    accessor: "providerLink"
  },
  {
    Header: "Contact Email",
    accessor: "contactEmail"
  },
  {
    Header: "Record Created By",
    accessor: "recordCreatedBy"
  },
  {
    Header: "Last Updated",
    accessor: "lastUpdate"
  }
]


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


    return (
      <div className="main-container" >
        <h1>List of Certificate and Training Programs</h1>
        <div id='links'>

        </div>
        <div id='db-info-container'>
          <ReactTable
            columns={columns}
            data={this.state.programs}  
          />
        </div>
      </div>
    );
  }
}

export { Home, columns };