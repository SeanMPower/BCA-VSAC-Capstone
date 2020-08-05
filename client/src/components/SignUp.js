import React from 'react';
//sign in/sign up forms
function SignUp(props) {
    return (
        <div>
            <h4>Don't have an account yet?</h4>
            <h4>Sign Up:</h4>
            <form id="signup-form" onSubmit={props.emailSignup}>
                <label> Email:
                    <input
                        type='text'
                        name='newEmail'
                        id='new-email'
                        value={props.newEmail}
                        onChange={props.handleChange} />
                </label>
                <label> Password:
                    <input
                        type='password'
                        name='newPassword'
                        id='new-password'
                        value={props.newPassword}
                        onChange={props.handleChange}
                    />
                </label>
                <label> Confirm Password:
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirm-password'
                        value={props.confirmPassword}
                        onChange={props.handleChange}
                    />
                </label>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default SignUp;