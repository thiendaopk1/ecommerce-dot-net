import React from 'react';
import PropTypes from 'prop-types';
import * as yup from  'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOpenOutlined';
import { Link } from 'react-router-dom';
import InputField from '../../../../component/Form-control/InputField';
import PasswordField from '../../../../component/Form-control/passwordField';
import { Close } from '@material-ui/icons';
import ForgotPassword from '../forgotpassword';

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
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
      },
   
}));

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    onClose:PropTypes.func,
    opendangky:PropTypes.func,
};

function LoginForm(props) {
    const handleClickOpen = () => {
        handleOncloseLogin();
      };
      const handleClickOpenRegister = () => {
        const open = props.opendangky;
        open();
      };
    const handleOncloseLogin = () => {
        const onClose1 = props.onClose;
            onClose1();
    };
    const classes = useStyles();
    const schema = yup.object().shape({
        email: yup.string().required('please enter your email').email('please enter a valid email address'),
       password: yup.string().required('please enter your password')
       .matches("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}",'Password must contain at least 8 characters, including upper case letters, lower case letters, numbers and a special character'),
    });
    const form = useForm({
        defaultValues:{
            email:'',
            password:'',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const onSubmit1 = props.onSubmit;
          await onSubmit1(values);

    };
    const {isSubmitting} = form.formState;
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress />}
            <Avatar className={classes.avatar}>
            <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className={classes.title} component='h3' variant='h5'>
                Sign In
            </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="email" label="Email" form={form} />
            <PasswordField name="password" label="Password" form={form} />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
            Sign In
        </Button>
        <Grid container>
            <Grid item xs>
            <Button onClick={handleClickOpen} style={{marginRight: 24}} className={classes.link}>
                Forgot password?
              </Button>
            </Grid>
            <Grid item>
            <Button onClick={handleClickOpenRegister} className={classes.link}>
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
        </div>
    );
}

export default LoginForm;