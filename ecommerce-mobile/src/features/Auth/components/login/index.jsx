import React from 'react';
import LoginForm from '../loginForm';

Login.propTypes = {
    
};

function Login(props) {
    const handleSubmit = (values) =>{
        console.log('Form Sumit')
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;