import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../userSlice';
import ForgotPasswordForm from '../forgotpasswordForm';
ForgotPassword.propTypes = {
    closeDialog: PropTypes.func,
};

function ForgotPassword(props) {
    const dispath = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) =>{
        try {

            const action = forgotPassword(values);
            await dispath(action)
            const resultAction = await dispath(action)
            const user = unwrapResult(resultAction)
            //close dialog
            const { closeDialog } = props;
            if(closeDialog){
                closeDialog();
            }

            enqueueSnackbar('Yêu cầu đã được tiếp nhận. Hãy kiểm tra email của bạn!', {variant: 'success'});
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    };
    return (
        <div>
            <ForgotPasswordForm onSubmit={handleSubmit} />
        </div>
    );
}

export default ForgotPassword;