import React from 'react';
import RegisterForm from '../registerForm';

Register.propTypes = {
    
};

function Register(props) {
    const handleSubmit = (values) =>{
        console.log('Form Sumit')
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;