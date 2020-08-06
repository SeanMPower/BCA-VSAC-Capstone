import React from 'react';
//sign in/sign up forms
function SignIn(props) {
    return (
        <div className='container'>
            <div className='form-container'>
            <form id="signin-form" onSubmit={props.emailSignin}>
                <label> Email:
                    <input 
                    type='text'
                    name='email' 
                    id='new-email' 
                    value={props.email}
                    onChange={props.handleChange} />
                </label>
                <label className='password'> Password:
                    <input 
                    type='password'
                    name='password' 
                    id='new-password'
                    value={props.password}
                    onChange={props.handleChange}  
                    />
                </label>
                <input type='submit' value='Submit' className='submit' />
            </form>
            </div>
        </div>
    )
}

export default SignIn;