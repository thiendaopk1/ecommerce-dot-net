import { Badge, Box, fade, Menu, MenuItem } from '@material-ui/core';
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
import cartApi from '../../api/cartApi';
import ChangePassword from '../../features/Auth/components/changePassword';
import ForgotPassword from '../../features/Auth/components/forgotpassword';
import Login from '../../features/Auth/components/login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
import { removeAll } from '../../features/ShoppingCart/cartSlice';
import { cartItemsCountSelectors } from '../../features/ShoppingCart/selectors';
import SearchForm from '../search';
import Hang from './Hang';
import logo from '../../images/phonehaylogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,

    maxWidth: 1232,
    margin: 'auto',
    height: 116,
  },
  header: {
    background: '#ffff',
    position: 'fixed',
    // maxWidth: '100%',
    maxWidth: 1232,
    borderBottom: '3px solid #000',
  },
  toolbar: {
    maxWidth: 1232,
    borderBottom: '0.5px solid #6e6e6e',
    // left:'3%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  shop: {
    margin: '10px',
    padding: '10px',
  },
  home: {
    margin: '10px',
    padding: '10px',
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
    color: '#6e6e6e',
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
    // left:'3%',
    // maxWidth:1232,
  },
}));
// const StyledBadge = withStyles((theme) => ({
//   badge: {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//   },
// }))(Badge);

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};
export default function Header() {
  //check isLogin
  const loggedInUser = useSelector((state) => state.user.current);
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
  const [mode, setMode] = useState(MODE.REGISTER);
  // form dang nhap
  const [openLogin, setOpenLogin] = useState(false);
  //form forgot pass
  const [openForgotPass, setOpenForgotPass] = useState(false);
  //form change pass
  const [openChangePass, setOpenChangePass] = useState(false);
  //menu user
  const [anchorEl, setAnchorEl] = useState(null);
  // form dang ky
  const handleClickOpen = () => {
    setOpen(true);
    setOpenLogin(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //form quen mat  khau
  const handleClickOpenForgotPass = () => {
    setOpenForgotPass(true);
    setOpenLogin(false);
  };

  const handleCloseForgotPass = () => {
    setOpenForgotPass(false);
  };
  //form doi mat  khau
  const handleClickOpenChangePass = () => {
    setOpenChangePass(true);
    setOpenForgotPass(false);
  };

  const handleCloseChangePass = () => {
    setOpenChangePass(false);
    setOpenLogin(true);
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
  // const [cart, setCart] = useState({});
  const data1 = JSON.parse(localStorage.getItem('cart'));

  const handleLogoutClick = () => {
    (async () => {
      try {
        const thien = { cartItems: data1 };
        const list = await cartApi.add(thien);
        const action = logout();
        const action1 = removeAll();
        dispatch(action1);
        dispatch(action);
        handleCloseMenuUser();
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const classes = useStyles();
  const hang = {
    id: 1,
    name: 'samsung',
    img: 'https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340490904217021_Samsung@2x.jpg',
  };
  const hang2 = {
    id: 2,
    name: 'xiaomi',
    img: 'https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491898901930_Xiaomi@2x.jpg',
  };
  const hang3 = {
    id: 3,
    name: 'huawei',
    img: 'https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340494667486283_Huawei@2x.jpg',
  };
  const hang4 = {
    id: 4,
    name: 'realme',
    img: 'https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491898745716_Realme@2x.jpg',
  };
  const hang5 = {
    id: 5,
    name: 'oppo',
    img: 'https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491304997311_Oppo@2x.jpg',
  };
  const hang6 = {
    id: 6,
    name: 'vinsmart',
    img: 'https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491898901930_Vsmart@2x.jpg',
  };
  const hang8 = {
    id: 8,
    name: 'iphone',
    img: 'https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340490193124614_iPhone-Apple@2x.jpg',
  };
  const hang9 = {
    id: 9,
    name: 'nokia',
    img: 'https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340493755614653_Nokia@2x.jpg',
  };

  const data = [hang, hang2, hang3, hang4, hang5, hang6, hang8, hang9];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          {/* search */}
          <Box className={classes.title}>
            <Typography variant="h6" className={classes.home}>
              <Link className={classes.link} to="/">
                <img src={logo} style={{ height: '30px', width: '55px' }} />
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.shop}>
              <Link className={classes.link} to="/products">
                SHOP
              </Link>
            </Typography>
            <SearchForm />
          </Box>

          <Box>
            <IconButton aria-label="cart">
              {!isLoggedIn && (
                <>
                  <Badge
                    badgeContent={cartItemsCount}
                    color="secondary"
                    onClick={handleClickOpenLogin}
                  >
                    <ShoppingCartIcon className={classes.cartIcon} />
                  </Badge>
                </>
              )}
              {isLoggedIn && (
                <>
                  <Badge badgeContent={cartItemsCount} color="secondary" onClick={handleClickCart}>
                    <ShoppingCartIcon className={classes.cartIcon} />
                  </Badge>
                </>
              )}
            </IconButton>
            {!isLoggedIn && (
              <>
                <Button color="#6e6e6e" onClick={handleClickOpenLogin}>
                  Login
                </Button>
                <Button color="#6e6e6e" onClick={handleClickOpen}>
                  Register
                </Button>
              </>
            )}
            {isLoggedIn && (
              <IconButton color="#6e6e6e" onClick={handleUserClick}>
                <AccountCircle />
                <div>{loggedInUser.fullName}</div>
              </IconButton>
            )}
          </Box>
        </Toolbar>
        <div className={classes.hang}>
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
        <Link className={classes.link} to="/user-info">
          <MenuItem onClick={handleCloseMenuUser}>My account</MenuItem>
        </Link>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        {isLoggedIn && loggedInUser.userRoles[0].role.name == 'ADMIN' && (
          <Link className={classes.link} to="/admin">
            <MenuItem onClick={handleCloseMenuUser}>Admin Manager</MenuItem>
          </Link>
        )}
      </Menu>
      {/* form sign up */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleClose} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
            </>
          )}
        </DialogContent>
      </Dialog>
      {/* form login */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleCloseLogin} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          <Login
            closeDialog={handleCloseLogin}
            openForgot={handleClickOpenForgotPass}
            openRegister={handleClickOpen}
          />
        </DialogContent>
      </Dialog>
      {/* form forgot Pasword */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={openForgotPass}
        onClose={handleCloseForgotPass}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleCloseForgotPass} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          <ForgotPassword closeDialog={handleClickOpenChangePass} />
        </DialogContent>
      </Dialog>
      {/* formchange pasword */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={openChangePass}
        onClose={handleCloseChangePass}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleCloseChangePass} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          <ChangePassword closeDialog={handleCloseChangePass} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
