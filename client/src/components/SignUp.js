import React from 'react';

// This component sets up the form for the firebase account sign-up
function SignUp(props) {
    return (
        <div className='container'>
            <div className='form-container'>
            <h4>Sign Up:</h4>
            <form id="signup-form" onSubmit={props.emailSignup}>
                <label className='firstName'> First Name:
                    <input
                        type='text'
                        name='newFirstname'
                        id='new-firstname'
                        value={props.newFirstname}
                        onChange={props.handleChange} />
                </label>
                <label className='lastName'> Last Name:
                    <input
                        type='text'
                        name='newLastname'
                        id='new-lastname'
                        value={props.newLastname}
                        onChange={props.handleChange} />
                </label>
                <label className='organization'> Organization:
                    <input
                        type='text'
                        name='newOrganization'
                        id='new-lastname'
                        value={props.newOrganization}
                        onChange={props.handleChange} />
                </label>
                <label className='email'> Email:
                    <input
                        type='text'
                        name='newEmail'
                        id='new-email'
                        value={props.newEmail}
                        onChange={props.handleChange} />
                </label>
                <label className='password'> Password:
                    <input
                        type='password'
                        name='newPassword'
                        id='new-password'
                        value={props.newPassword}
                        onChange={props.handleChange}
                    />
                </label>
                <label className='c-password'> Confirm Password:
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirm-password'
                        value={props.confirmPassword}
                        onChange={props.handleChange}
                    />
                </label>
                <input type='submit' value='Submit' className='submit' />
            </form>
    <div className='err'>{props.errorMessage}</div>
            </div>
        </div>
    )
}

export default SignUp;