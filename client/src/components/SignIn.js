import React from 'react';
//sign in/sign up forms
function SignIn(props) {
    return (
        <div className='container'>
            <div className='form-container'>
            <form id="signin-form" onSubmit={props.emailSignin}>
                <label id='form-email'> Email:{' '}
                    <input 
                    type='text'
                    name='email' 
                    id='signin-email' 
                    value={props.email}
                    onChange={props.handleChange}
                    autoComplete={'email'}
                     />
                </label>
                <label className='password'> Password:{' '}
                    <input 
                    type='password'
                    name='password' 
                    id='signin-password'
                    value={props.password}
                    onChange={props.handleChange} 
                    autoComplete={'current-password'} 
                    />
                </label>
                <input type='submit' value='Log In' className='submit' />
            </form>
            </div>
        </div>
    )
}

export default SignIn;