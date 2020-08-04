import React from 'react'
import { CSVReader } from 'react-papaparse'

class CSVReader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      highlighted: false
    }
  }

  onChange = (evt) => {
    evt.preventDefault()
    let files = evt.target.files

    let reader = new FileReader();

  }

  render() {
    return (
      <div id="csv-reader">
        <h3>Upload CSV Files Here</h3>
        <h4>Dropzone</h4>
        <div id="dropzone">Drop CSV Files Here</div>
        <h4>OR Select File From Folder</h4>
        <div onSubmit={this.onFormSubmit}>
          <input type="file" name="file" onChange={(evt) => onChange/>
        </div>
      </div>
    )
  }
}