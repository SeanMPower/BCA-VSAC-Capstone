import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div id='header'>
           <Link to='/'>
            <img className='logo' src={Logo} title='VSAC logo' alt="VSAC logo" />
            </Link>
            <h1>Vermont Student<br></br>Assistance Corporation</h1>
        </div>
    )
}

export default Header