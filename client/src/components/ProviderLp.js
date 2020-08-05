import React from 'react';
import CSVReader from './FlatfileCSVReader'
//welcome function

function ProviderLp(props) {
    return (
      <div>
        <h1>Welcome, {props.user.displayName || props.user.email}</h1>
        <CSVReader />
        <a id="download-template" href="./provider_template.csv"
                        download>
                        <p>Download Template</p>
                    </a>
      </div>
    )
  }
  
  export default ProviderLp;