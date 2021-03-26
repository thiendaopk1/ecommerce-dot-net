import React from 'react';
import PropTypes from 'prop-types';
import * as yup from  'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, makeStyles, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOpenOutlined';
import { Link } from 'react-router-dom';
import InputField from '../../../../component/Form-control/InputField';
import PasswordField from '../../../../component/Form-control/passwordField';

const useStyles = makeStyles((theme) => ({
    root: {
        // paddingTop: theme.spacing(2),
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

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
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

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if(onSubmit){
            onSubmit(values);
        }
        form.restet();

    }
    return (
        <div className={classes.root}>
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
            <Link style={{marginRight: 24}} className={classes.link} to="/ForgotPassword">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
            <Link className={classes.link} to="/signup">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
       
        </div>
    );
}

export default LoginForm;