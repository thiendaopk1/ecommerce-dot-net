import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOpenOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../component/Form-control/InputField';

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

ForgotPasswordForm.propTypes = {
    onSubmit: PropTypes.func,
};

function ForgotPasswordForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
        email: yup.string().required('please enter your email').email('please enter a valid email address'),
    });
    const form = useForm({
        defaultValues:{
            email:'',
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
                Forgot Password
            </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="email" label="Email" form={form} />
            {/* <PasswordField name="password" label="Password" form={form} />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
            Forgot password?
        </Button>
        {/* <Grid container>
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
          </Grid> */}
        </form>
       
        </div>
    );
}

export default ForgotPasswordForm;