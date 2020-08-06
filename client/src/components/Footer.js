import React from 'react'
import Logo from '../img/logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
    return (
        <div id='footer'>
            <img src={Logo} className='logo' title='VSAC logo white' alt='VSAC logo white' />
            <div id='contact'>
            <p><FontAwesomeIcon icon={faPhone} className='icon'/>  (800) 642-3177</p>
            <p id='email'><FontAwesomeIcon icon={faEnvelope} className='icon'/> info@vsac.org</p>
            {/* <FontAwesomeIcon icon={faFacebook-f} className='icon'/> */}
            </div>
        </div>
    )
}

export default Footer