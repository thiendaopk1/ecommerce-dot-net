import React, { useState } from 'react';
import { login } from '../../userSlice';
import LoginForm from '../loginForm';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cartApi from '../../../../api/cartApi';
import { RepeatOneSharp } from '@material-ui/icons';
Login.propTypes = {
    closeDialog: PropTypes.func,
    openForgot:  PropTypes.func,
    openRegister:PropTypes.func,
};

function Login(props) {
    const dispath = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [cart, setCart] = useState();
    // console.log('cart',cart);
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
                const resultAction = await dispath(action)
                const user = unwrapResult(resultAction)
                const res = await cartApi.getAll();
                console.log(res);
                setCart(res);
                localStorage.getItem("cart",JSON.stringify(cart))
                //close dialog
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