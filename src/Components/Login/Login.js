import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase();
    return (
        <div>
            <h2>Login page</h2>
        <div style={{margin:20}}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
        </div>
        <form >
        <input type="email" name="" id="" placeholder='Your Email' />
        <br/>
        <input type="password" name="" id="" placeholder='Password'/>
        <br/>
        <input type="submit" value="Login" placeholder='' />
        </form>
        </div>
    );
};

export default Login;