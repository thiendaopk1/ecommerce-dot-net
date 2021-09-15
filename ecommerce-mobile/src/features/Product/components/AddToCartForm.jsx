import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Dialog,
  makeStyles,
  DialogContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { default as React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import InputField from '../../../component/Form-control/InputField';
import QuantityField from '../../../component/Form-control/QuantityField';
import Login from '../../Auth/components/login';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
  amount: PropTypes.number,
};
const useStyles = makeStyles((theme) => ({
  root: {},

  form: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '100%',
  },

  button: {
    marginLeft: '20px',
    marginTop: '40px',
    height: '50px',
  },
}));
function AddToCartForm({ onSubmit = null, amount }) {
  //check isLogin
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const history = useHistory();
  const dispatch = useDispatch();
  // form dang nhap
  const [openLogin, setOpenLogin] = useState(false);
  // form dang nhap
  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  const classes = useStyles();
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('làm ơn nhập')
      .min(1, 'Tối thiểu là 1 sản phẩm')
      .typeError('Làm ơn nhập số'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (!isLoggedIn) {
      return;
    } else {
      if (onSubmit) {
        await onSubmit(values);
      }
    }
  };
  return (
    <Box>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Box>
          <Typography>Số lượng còn lại: {amount} sản phẩm</Typography>
        </Box>
        <Box className={classes.form}>
          <QuantityField name="quantity" label="Quantity" form={form} />
          {amount === 0 && (
            <>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                disabled
              >
                Mua ngay
              </Button>
            </>
          )}
          {amount > 0 && (
            <>
              {!isLoggedIn && (
                <>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    onClick={handleClickOpenLogin}
                  >
                    Mua ngay
                  </Button>
                </>
              )}
              {isLoggedIn && (
                <>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                  >
                    Mua ngay
                  </Button>
                </>
              )}
            </>
          )}
        </Box>
      </form>
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
          <Login closeDialog={handleCloseLogin} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default AddToCartForm;
