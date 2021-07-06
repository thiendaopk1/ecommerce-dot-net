import { Avatar, Collapse, Grid, List, ListItem, ListItemText, ListSubheader, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import DoiMatKhau from '../DoiMatKhau';
import UserInfomation from './userInfo';
import Purchase from '../Purchase/index'
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
        // background: '#fff',
        borderRadius: 6,
    },
}));
UserInfo.propTypes = {
};
function UserInfo() {
    const loggedInUser = useSelector(state => state.user.current);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const {url} = useRouteMatch();
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
                                   {/* <span>{loggedInUser.fullname}</span> */}
                                </div>
                            </ListSubheader>
                        }
                        className={classes.menu}
                    >
                        <ListItem button>
                            <NavLink to={url} >
                            <ListItemText primary="Thông tin cá nhân" />
                            </NavLink>
                        </ListItem>
                        <ListItem button>
                            <NavLink to={`${url}/change-pass`} >
                            <ListItemText primary="Đổi mật khẩu" />
                            </NavLink>
                        </ListItem>
                        <ListItem button>
                            <NavLink to={`${url}/orders-manage`} >
                                <ListItemText primary="Đơn hàng của tôi" />
                            </NavLink>
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
                <Route path="/user-info" component={UserInfomation} exact/>
                <Route path="/user-info/change-pass" component={DoiMatKhau} exact/>
                <Route path="/user-info/orders-manage" component={Purchase} exact/>
                </Grid>
            </Grid>
        </div>
    );
}

export default UserInfo;