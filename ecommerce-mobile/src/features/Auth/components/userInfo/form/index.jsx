import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import InputField from '../../../../../component/Form-control/InputField';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1,0,1,0),
        width:'60%'
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        // margin: theme.spacing(1, 0, 2, 0),
        textAlign:'center',
    },
    submit: {
        // margin: theme.spacing(2, 0,1, 0)
    },
}));

UpdateForm.propTypes = {
    onSubmit: PropTypes.func,
};

function UpdateForm(props) {
    const loggedInUser = useSelector(state => state.user.current);
    const classes = useStyles();
    const schema = yup.object().shape({
       fullName: yup.string().required('please enter your full name')
       .test('should has at least two words', 'please enter at least two words',(value) => {
           return value.split(' ').length>=2;
       }),
       email: yup.string().required('please enter your email').email('please enter a valid email address'),
       phone: yup.string().required('please enter your phone number').length(10,'please enter a valid phone number').matches("((09|03|07|08|05)+([0-9]{8}))","please enter a valid phone number"),
       address: yup.string().required('please enter your address')
    });
    const form = useForm({
        defaultValues:{
            fullName: loggedInUser.fullname,
            email:loggedInUser.email,
            phone:loggedInUser.phone,
            address:loggedInUser.address,
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
           
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="fullName" label="Full Name" form={form} />
            <InputField name="email" label="Email" form={form} />
            <InputField name="phone" label="Phone Number" form={form} />
            <InputField name="address" label="Address" form={form} />
        <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
            create an Account
        </Button>
        </form>
        </div>
    );
}

export default UpdateForm;