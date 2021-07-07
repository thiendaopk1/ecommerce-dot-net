import { Paper } from '@material-ui/core';
import { Avatar, Grid, makeStyles } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
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
    materialIcons: {
        background: 'blue',
        color: 'white',
        marginTop: '10%',
        marginLeft: '12%',
        padding: '3% 4% 3% 4%',
        borderRadius: 10,
    },
}));
function UserInfomation(props) {
    const classes = useStyles();
    const loggedInUser = useSelector(state => state.user.current);
    const dispath = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [img, setImg] = useState(false);
    const handleSubmit = async (values) => {
        try {
            values.id = loggedInUser.id;
            // values.avatar=selectedFiles;
            const action = updateUser(values);
            const resultAction = await dispath(action)
            const user = unwrapResult(resultAction)
            enqueueSnackbar('Update successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };
   
    const handleImageChange = (e) => {
        // console.log(e.target.files[])
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setSelectedFiles(filesArray)
            setImg(true);
        }
    };

    return (
        <div>
            <Paper elevation={0}>
                <h2 className={classes.title}>Thông tin của bạn</h2>
                <Grid container>
                    <Grid item className={classes.left}>
                        <Avatar alt="Remy Sharp" src={img ? selectedFiles[0] : loggedInUser.avatar} className={classes.large} />
                        <input style={{ display: 'none' }} type="file" id="file" onChange={handleImageChange} />
                        <div style={{marginTop:'6%'}} className="label-holder">
                            <label  htmlFor="file">
                                <i className={classes.materialIcons}>edit Image</i>
                            </label>
                        </div>
                    </Grid>
                    <UpdateForm onSubmit={handleSubmit} />
                </Grid>
            </Paper>
        </div>
    );
}

export default UserInfomation;