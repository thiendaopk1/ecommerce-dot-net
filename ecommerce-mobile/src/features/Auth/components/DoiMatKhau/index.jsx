import { Paper } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doiMatKhau, logout } from '../../userSlice';
import DoiMatKhauForm from './form';
import {Redirect} from 'react-router-dom';
import { removeAll } from '../../../ShoppingCart/cartSlice';
import cartApi from '../../../../api/cartApi';
DoiMatKhau.propTypes = {
    
};

function DoiMatKhau(props) {
    const { enqueueSnackbar } = useSnackbar();
    const dispath = useDispatch();
    const loggedInUser = useSelector(state => state.user.current);
       //logOut
  // const [cart, setCart] = useState({});
  const data1 = JSON.parse(localStorage.getItem("cart"));
    const handleSubmitDoiPass = async (values) => {
        try {
            values.id = loggedInUser.id;
            const action = doiMatKhau(values);
            const resultAction = await dispath(action)
            const user = unwrapResult(resultAction)
            enqueueSnackbar('Change password success!', { variant: 'success' });
            const thien={"cartItems": data1};
            const list = await cartApi.add(thien);
            const action2= logout();
            const action1 = removeAll();
            dispath(action1);
            dispath(action2);
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };
    const isLoggedIn = !!loggedInUser.id;
    if(!isLoggedIn){
        return <Redirect to="/"/>
    }
    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <Paper elevation={0}>
                <DoiMatKhauForm onSubmit={handleSubmitDoiPass} />
            </Paper>
        </div>
    );
}

export default DoiMatKhau;