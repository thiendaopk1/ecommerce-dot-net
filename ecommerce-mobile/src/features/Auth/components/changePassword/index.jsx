import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../userSlice';
import ChangePasswordForm from '../changePasswordForm';
ChangePassword.propTypes = {
    closeDialog: PropTypes.func,
};

function ChangePassword(props) {
    const dispath = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) =>{
        try {

            const action = changePassword(values);
            const resultAction = await dispath(action)
            const user = unwrapResult(resultAction)
            //close dialog
            const { closeDialog } = props;
            if(closeDialog){
                closeDialog();
            }

            enqueueSnackbar('Change password success!', {variant: 'success'});
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    };
    return (
        <div>
            <ChangePasswordForm onSubmit={handleSubmit} />
        </div>
    );
}

export default ChangePassword;