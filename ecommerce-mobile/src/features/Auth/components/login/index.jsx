import React, { useState } from 'react';
import { login } from '../../userSlice';
import LoginForm from '../loginForm';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cartApi from '../../../../api/cartApi';
import { setCart } from '../../../ShoppingCart/cartSlice';

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
        (async () => {
            try {
                
                const action = login(values);
                const resultAction = await dispath(action);
                const user = unwrapResult(resultAction);
                
                //gọi api
                const {items} = await cartApi.getAll();
                
                dispath(setCart(items))
                const { closeDialog } = props;
                if(closeDialog){
                    closeDialog();
                }
    
                enqueueSnackbar('login successfully', {variant: 'success'});
            } catch (error) {
                enqueueSnackbar(error.message, {variant: 'error'});
            }
        })();
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} onClose={oncloseLogin} opendangky={openFormRegister}/>
        </div>
    );
}

export default Login;