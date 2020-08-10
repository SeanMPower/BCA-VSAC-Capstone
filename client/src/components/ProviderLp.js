import React from 'react';
import { Link } from 'react-router-dom'
import CSVReader from './FlatfileCSVReader'
//welcome function

function ProviderLp (props) {
  console.log(props.userData)
  return (
    <div>{props.userData && props.userData.role === "user"
      ? <div>
        <h1>Hello, {props.user.displayName || props.user.email}</h1>
        <CSVReader uid={props.uid} id='csv-button' />
        <a id="download-template" href="./provider_template.csv"
          download>
          <p>Click Here to Download Template</p>
        </a>
        <button id='signout-button' type="button" onClick={props.signOut}>Sign Out</button>
        <div id='db-info-container'>
          Placeholder for DB info
        </div>
      </div>
      :
      <div>
        <p>Please sign in on the VSAC page</p>
        <p><Link to='/vsac-user'>
          VSAC User
        </Link></p>
        <button id='signout-button' type="button" onClick={props.signOut}>Sign Out</button>
      </div>
    }
    </div>
  )
}

export default ProviderLp;