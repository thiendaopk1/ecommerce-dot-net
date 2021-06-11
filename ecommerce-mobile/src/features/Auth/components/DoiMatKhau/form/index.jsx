import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOpenOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordField from '../../../../../component/Form-control/passwordField';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2,0,2,0),
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        margin: theme.spacing(1, 0, 2, 0),
        textAlign:'center',
    },
    submit: {
        margin: theme.spacing(2, 0,1, 0)
    },
    link:{
        textDecoration: 'none',
    }
   
}));

DoiMatKhauForm.propTypes = {
    onSubmit: PropTypes.func,
};

function DoiMatKhauForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
        currentPass: yup.string().required('please enter your currentPass'),
        newpass: yup.string().required('please enter your password')
        .matches("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}",'Password must contain at least 8 characters, including upper case letters, lower case letters, numbers and a special character'),
        repass: yup.string().required('please retype your password').oneOf([yup.ref('newpass')],'passord does not match'),
        // opt: yup.string().required('please enter your opt'),
    });
    const form = useForm({
        defaultValues:{
            currentPass:'',
            newpass:'',
            repass:'',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if(onSubmit){
          await onSubmit(values);
        }

    };
    const {isSubmitting} = form.formState;
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress />}
            <Avatar className={classes.avatar}>
            <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className={classes.title} component='h3' variant='h5'>
                Change Password
            </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <PasswordField name="currentPass" label="Current Password " form={form} />
            <PasswordField name="newpass" label="New Password" form={form} />
            <PasswordField name="repass" label="Retype New Password" form={form} />
        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
            Change password?
        </Button>
        </form>
       
        </div>
    );
}

export default DoiMatKhauForm;