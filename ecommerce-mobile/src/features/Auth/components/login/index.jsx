import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import cartApi from '../../../../api/cartApi';
import { setCart } from '../../../ShoppingCart/cartSlice';
import { login } from '../../userSlice';
import LoginForm from '../loginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
  openForgot: PropTypes.func,
  openRegister: PropTypes.func,
};

function Login(props) {
  const dispath = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const oncloseLogin = (value) => {
    const open = props.openForgot;
    open();
  };
  const openFormRegister = () => {
    const open1 = props.openRegister;
    open1();
  };

  const handleSubmit = async (values) => {
    (async () => {
      try {
        const action = login(values);
        const resultAction = await dispath(action);
        unwrapResult(resultAction);

        //gọi api
        const { items } = await cartApi.getAll();
        dispath(setCart(items));
        const { closeDialog } = props;
        if (closeDialog) {
          closeDialog();
        }

        enqueueSnackbar('login successfully', { variant: 'success' });
      } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    })();
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} onClose={oncloseLogin} opendangky={openFormRegister} />
    </div>
  );
}

export default Login;
