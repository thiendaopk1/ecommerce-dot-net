import { Badge, Box, fade, Menu, MenuItem, withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Login from '../../features/Auth/components/login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
import { cartItemsCountSelectors } from '../../features/ShoppingCart/selectors';
import SearchForm from '../search';
import Hang from './Hang';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxWidth: 1232,
    margin: 'auto',
    height:116,
  },
  header: {
    background: '#cd1817',
    position:'fixed',
    maxWidth: 1232,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  link: {
    color: '#545454',
    textDecoration: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  cartIcon: {
    color: '#fff',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  hang: {
    background: '#fff',
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};
export default function Header() {
  //check isLogin
  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const history = useHistory();

  //logOut
  const dispatch = useDispatch();
  //Cart
  const cartItemsCount = useSelector(cartItemsCountSelectors);
  const handleClickCart = () => {
    history.push('/cart');
  };
  // form dang ky
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.REGISTER)
  // form dang nhap
  const [openLogin, setOpenLogin] = useState(false);
  //menu user
  const [anchorEl, setAnchorEl] = useState(null);
  // form dang ky
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // form dang nhap
  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };
  
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  //menu user
  const handleCloseMenuUser = (e) => {
    setAnchorEl(null);
  };
  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  //logOut
  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
    handleCloseMenuUser();
  };

  const classes = useStyles();
  const hang = {
    id: 1,
    name: "samsung",
    img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340490904217021_Samsung@2x.jpg",
  };
  const hang2 = {
    id: 2,
    name: "xiaomi",
    img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491898901930_Xiaomi@2x.jpg",
  };
  const hang3 = {
    id: 3,
    name: "iphone",
    img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340490193124614_iPhone-Apple@2x.jpg",
  };
  const hang4 = {
    id: 4,
    name: "oppo",
    img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491304997311_Oppo@2x.jpg",
  };
  const hang5 = {
    id: 5,
    name: "realme",
    img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491898745716_Realme@2x.jpg",
  };
  const hang6 = {
    id: 6,
    name: "vinsmart",
    img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491898901930_Vsmart@2x.jpg",
  };
  const hang7 = {
    id: 7,
    name: "nokia",
    img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340493755614653_Nokia@2x.jpg",
  };
  const hang8 = {
    id: 8,
    name: "huawei",
    img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340494667486283_Huawei@2x.jpg",
  };

  const data = [hang, hang2, hang3, hang4, hang5, hang6, hang7, hang8];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/"> Ecommerce-mobile</Link>
          </Typography>
          {/* search */}
          
          <SearchForm />
          <Box>
          <IconButton aria-label="cart">
            <Badge badgeContent={cartItemsCount} color="secondary" onClick={handleClickCart}>
              <ShoppingCartIcon className={classes.cartIcon} />
            </Badge>
          </IconButton>
          {!isLoggedIn && (
            <>

              <Button color="inherit" onClick={handleClickOpenLogin}>Login</Button>
              <Button color="inherit" onClick={handleClickOpen}>Register</Button>
            </>
          )}
          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle />
              <div>
                {loggedInUser.fullName}
              </div>
            </IconButton>
          )}
          </Box>
        </Toolbar>
        <div className={classes.hang} >
          {data.map((hang) => (
            <Hang hang={hang} />
          ))}
        </div>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenuUser}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        {/* <MenuItem onClick={handleCloseMenuUser}>Profile</MenuItem> */}
        <a className={classes.link} href="/user-info" ><MenuItem onClick={handleCloseMenuUser}>My account</MenuItem></a>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
      {/* form sign up */}
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <IconButton onClick={handleClose} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode == MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here?
              </Button>
              </Box>
            </>
          )}
          {mode == MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account. Register here?
              </Button>
              </Box>
            </>
          )}
          {/* <Login closeDialog={handleClose}/> */}
        </DialogContent>
      </Dialog>

      <Dialog disableBackdropClick disableEscapeKeyDown open={openLogin} onClose={handleCloseLogin} aria-labelledby="form-dialog-title">
        <IconButton onClick={handleCloseLogin} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          <Login closeDialog={handleCloseLogin} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
