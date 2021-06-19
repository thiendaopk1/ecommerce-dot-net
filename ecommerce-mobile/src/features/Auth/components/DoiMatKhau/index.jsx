import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doiMatKhau } from '../../userSlice';
import DoiMatKhauForm from './form';

DoiMatKhau.propTypes = {
    
};

function DoiMatKhau(props) {
    const { enqueueSnackbar } = useSnackbar();
    const dispath = useDispatch();
    const loggedInUser = useSelector(state => state.user.current);
    const handleSubmitDoiPass = async (values) => {
        try {
            values.id = loggedInUser.id;
            const action = doiMatKhau(values);
            const resultAction = await dispath(action)
            const user = unwrapResult(resultAction)
            enqueueSnackbar('Change password success!', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };
    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <DoiMatKhauForm onSubmit={handleSubmitDoiPass} />
        </div>
    );
}

export default DoiMatKhau;