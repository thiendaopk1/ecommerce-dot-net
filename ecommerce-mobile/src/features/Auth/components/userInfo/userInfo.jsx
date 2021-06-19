import { Avatar, Grid, makeStyles } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../userSlice';
import UpdateForm from './form';

UserInfomation.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
   
    large: {
        width: '60%',
        height: '50%',
        margin: '6% 3% 2% 6%',
    },
    ten: {
        marginLeft: '13%',
    },
    left: {
        width: '20%',
    },
    title: {
        borderBottom: 'solid 1px #efefef',
        padding: '2% 0 2% 1%',
        margin: 0,
    },
}));
function UserInfomation(props) {
    const classes = useStyles();
    const loggedInUser = useSelector(state => state.user.current);
    const dispath = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = async (values) => {
        try {
            values.id = loggedInUser.id;
            const action = updateUser(values);
            const resultAction = await dispath(action)
            const user = unwrapResult(resultAction)
            enqueueSnackbar('Update successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };
    return (
        <div>
        <h2 className={classes.title}>Thông tin của bạn</h2>
        <Grid container>
            <Grid item className={classes.left}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                <p className={classes.ten}>{loggedInUser.fullName}</p>
            </Grid>
            <UpdateForm onSubmit={handleSubmit} />
        </Grid>
    </div>
    );
}

export default UserInfomation;