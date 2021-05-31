import React from 'react';
import { login } from '../../userSlice';
import LoginForm from '../loginForm';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
Login.propTypes = {
    closeDialog: PropTypes.func,
    openForgot:  PropTypes.func,
    openRegister:PropTypes.func,
};

function Login(props) {
    const dispath = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const oncloseLogin=(value)=>{
        const open = props.openForgot; 
                open();
    }
    const openFormRegister=()=>{
        const open1 = props.openRegister; 
                open1();
    }
    const handleSubmit = async (values) =>{
        try {

            const action = login(values);
            const resultAction = await dispath(action)
            const user = unwrapResult(resultAction)
            //close dialog
            const { closeDialog } = props;
            if(closeDialog){
                closeDialog();
            }

            enqueueSnackbar('login successfully', {variant: 'success'});
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} onClose={oncloseLogin} opendangky={openFormRegister}/>
        </div>
    );
}

export default Login;