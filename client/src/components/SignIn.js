import React from 'react';
//sign in/sign up forms
function SignIn(props) {
    return (
        <div>
            <h4>Sign In:</h4>
            <form id="signin-form" onSubmit={props.emailSignin}>
                <label> Email:
                    <input 
                    type='text'
                    name='email' 
                    id='new-email' 
                    value={props.email}
                    onChange={props.handleChange} />
                </label>
                <label> Password:
                    <input 
                    type='password'
                    name='password' 
                    id='new-password'
                    value={props.password}
                    onChange={props.handleChange}  
                    />
                </label>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default SignIn;