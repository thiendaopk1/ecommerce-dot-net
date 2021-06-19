import { Avatar, Collapse, Grid, List, ListItem, ListItemText, ListSubheader, makeStyles } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doiMatKhau, updateUser } from '../../userSlice';
import DoiMatKhauForm from '../DoiMatKhau/form';
import UpdateForm from './form';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1232,
        margin: 'auto',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: '30%',
    },
    large: {
        width: '60%',
        height: '50%',
        margin: '6% 3% 2% 6%',
    },
    ten: {
        marginLeft: '13%',
    },
    menu: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    left: {
        width: '20%',
    },
    right: {
        flex: '1 1 0',
        background: '#fff',
        borderRadius: 6,
    },
    title: {
        borderBottom: 'solid 1px #efefef',
        padding: '2% 0 2% 1%',
        margin: 0,
    },
    text: {
        width: '60%',
        margin: '3% 0 0 3%',
    },
    info: {
        marginTop: '2%',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
      },
}));
UserInfo.propTypes = {
    onSubmit: PropTypes.func,
};
function UserInfo(props) {
    //form change pass
    const [openChangePass, setOpenChangePass] = useState(false);
    //form doi mat  khau
    const handleClickOpenChangePass = () => {
        setOpenChangePass(true);
        setopenUserInfo(false);
    };
    const handleCloseChangePass = () => {
        setOpenChangePass(false);
    };
    const [openUserInfo, setopenUserInfo] = useState(true);
    //form doi mat  khau
    const handleClickUserInfo = () => {
        setopenUserInfo(true);
        setOpenChangePass(false);
    };
    const classes = useStyles();
    const loggedInUser = useSelector(state => state.user.current);
    const [open, setOpen] = React.useState(false);
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
    const handleSubmitDoiPass = async (values) =>{
        try {
            values.id = loggedInUser.id;
            const action = doiMatKhau(values);
            const resultAction = await dispath(action)
            const user = unwrapResult(resultAction)
            enqueueSnackbar('Change password success!', {variant: 'success'});
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    };
    const handleClickPurchase = () => {
        
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item >
                    <List component="nav" aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <div>
                                    <Avatar style={{ float: 'left', margin: '5% 3% 0 2%' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
                                    {loggedInUser.fullName}
                                </div>
                            </ListSubheader>
                        }
                        className={classes.menu}
                    >
                        <ListItem onClick={handleClickUserInfo} button>
                            <ListItemText primary="Thông tin cá nhân" />
                        </ListItem>
                        <ListItem onClick={handleClickOpenChangePass} button>
                            <ListItemText primary="Đổi mật khẩu" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Đơn hàng của tôi" />
                            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
                                    <ListItemText primary="Starred" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Grid>
                <Grid item className={classes.right}>
                    {openUserInfo&&(
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
                    )}
                     {openChangePass&&(
                    <div style={{width:'50%',margin:'auto'}}>
                    <DoiMatKhauForm onSubmit={handleSubmitDoiPass} />
                    </div>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default UserInfo;