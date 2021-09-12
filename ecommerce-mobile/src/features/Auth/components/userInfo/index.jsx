import {
  Avatar,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import DoiMatKhau from '../DoiMatKhau';
import UserInfomation from './userInfo';
import Purchase from '../Purchase/index';
import classNames from 'classnames';
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

  menuItem: {
    color: 'red',
  },
}));
UserInfo.propTypes = {};
function UserInfo() {
  const loggedInUser = useSelector((state) => state.user.current);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { url } = useRouteMatch();
  console.log('url', url);
  const [active, setActive] = useState(1);
  const handleSetActive = (num) => {
    setActive(num);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <div>
                  <Avatar
                    style={{ float: 'left', margin: '5% 3% 0 2%' }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className={classes.small}
                  />
                </div>
              </ListSubheader>
            }
            className={classes.menu}
          >
            <ListItem button className={classes.menuItem} onClick={() => handleSetActive(1)}>
              <NavLink to={url} style={{ textDecoration: 'none' }} exact>
                <ListItemText
                  className={classNames(active === 1 && classes.menuItem)}
                  primary="Thông tin cá nhân"
                />
              </NavLink>
            </ListItem>
            <ListItem button className={classes.menuItem} onClick={() => handleSetActive(2)}>
              <NavLink to={`${url}/change-pass`} style={{ textDecoration: 'none' }} exact>
                <ListItemText
                  className={classNames(active === 2 && classes.menuItem)}
                  primary="Đổi mật khẩu"
                />
              </NavLink>
            </ListItem>
            <ListItem button className={classes.menuItem} onClick={() => handleSetActive(3)}>
              <NavLink to={`${url}/orders-manage`} style={{ textDecoration: 'none' }} exact>
                <ListItemText
                  className={classNames(active === 3 && classes.menuItem)}
                  primary="Đơn hàng của tôi"
                />
              </NavLink>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item className={classes.right}>
          <Route path="/user-info" component={UserInfomation} exact />
          <Route path="/user-info/change-pass" component={DoiMatKhau} exact />
          <Route path="/user-info/orders-manage" component={Purchase} exact />
        </Grid>
      </Grid>
    </div>
  );
}

export default UserInfo;
