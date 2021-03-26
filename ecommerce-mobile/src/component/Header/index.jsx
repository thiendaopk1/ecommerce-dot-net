import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Register from '../../features/Auth/components/Register';
import Login from '../../features/Auth/components/login';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link:{
      color: '#fff',
      textDecoration: 'none',
  }
}));

export default function Header() {
  // form dang ky
    const [open, setOpen] = useState(false);
    // form dang nhap
    const [openLogin, setOpenLogin] = useState(false);

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.link} to="/"> News</Link> 
          </Typography>

          <NavLink className={classes.link} to="/login" >
          <Button color="inherit" onClick={handleClickOpenLogin}>Login</Button>
          </NavLink>

          <NavLink className={classes.link} to="/singup" >
          <Button color="inherit" onClick={handleClickOpen}>Register</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
{/* form sign up */}
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
         <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog disableBackdropClick disableEscapeKeyDown open={openLogin} onClose={handleCloseLogin} aria-labelledby="form-dialog-title">
        <DialogContent>
         <Login />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
