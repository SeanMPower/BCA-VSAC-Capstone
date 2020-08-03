import React from 'react';
import { Link } from 'react-router-dom';
import { database } from 'firebase';

let selectedField;

class Dbpage extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
  
      }
    }
  
    handleChange = (event) => {
        event.preventDefault();
        selectedField = `${event.target.value}`
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(selectedField)
    }

    render() {
      return (
        <div className="main-container">
          <h1>This is the for Database Content</h1>
          <Link to='/'>Home</Link>
          <div id='temporary-form'>
          {/* <input type='text' id='searchBar' name="search">Search</input>
          <input type='submit'></input> */}
          <select id='properties' onChange={this.handleChange}>
              <option value=''></option>
              <option value='Provider'>Provider</option>
              <option value='Program'>Program</option>
              <option value='Certification'>Certification</option>
              <option value='Region'>Region</option>
              <option value='Modality'>Modality</option>
              <option value='Price'>Price</option>
              <option value='Pell'>Pell</option>
              <option value='VT Advancement Grant'>VT Advancement Grant</option>
              <option value='Start and End Dates'>Start and End Dates</option>
              <option value='Provider Link'>Provider Link</option>
              <option value='Contact Email'>Contact Email</option>
              <option value='Record Created By'>Record Created By</option>
              <option value='Last Update'>Last Update</option>
          </select>

          <button id='submit' className='submit_element' onClick={this.formSubmit}>Submit</button>
          </div>
        </div>
      );
    }
  }


export default Dbpage;