import React from 'react'
import SignUp from './SignUp.js'

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
            <>
            <div className='modal-container'>
            <div className='modal'><SignUp /><div id='close-btn'onClick={this.props.handleClose}>+</div></div>
            </div>
            </>
        )
    }
}

export default Modal;