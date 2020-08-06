import React from 'react';
import CSVReader from './FlatfileCSVReader'
//welcome function

function ProviderLp(props) {
  return (
    <div>
      <h1>Hello, {props.user.displayName || props.user.email}</h1>
      <CSVReader uid={props.uid} id='csv-button'/>
      <a id="download-template" href="./provider_template.csv"
        download>
        <p>Click Here to Download Template</p>
      </a>
      <button id='signout-button' type="button" onClick={props.signOut}>Sign Out</button>
    </div>
  )
}

export default ProviderLp;