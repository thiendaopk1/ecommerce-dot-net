import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ListItems from './ListItems';
import { addToCart } from '../../../../ShoppingCart/cartSlice';
import { useDispatch } from 'react-redux';
import CommentForm from './CommentForm';
import CommentView from './CommentView';

Orders.propTypes = {
  Orders: PropTypes.object,
  onCancel: PropTypes.func,
  onSubmitComment: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  header: {
    padding: '20px 25px',
    borderBottom: '1px solid rgba(0,0,0,.09)',
    // marginBottom: '5px'
  },

  paymentType: {
    display: 'flex',
    float: 'left',
    color: '#26aa99',
  },

  status: {
    display: 'flex',
    float: 'right',
    color: '#ee4d2d',
  },

  footer: {
    // borderBottom: '1px solid rgba(0,0,0,.09)',
  },

  date: {
    display: 'flex',
    float: 'left',
  },

  dates: {
    color: 'rgba(0,0,0,.54)',
  },

  btn: {
    display: 'flex',
    flexFlow: 'column',
    float: 'right',
  },

  tongDonHang: {
    display: 'flex',
    flexFlow: 'row nowrap',
    float: 'right',
  },

  tongtien: {
    lineHeight: '30px',
    fontSize: '14px',
    margin: '0 10px 0 0',
    textAlign: 'center',
  },

  totalPrice: {
    color: '#ee4d2d',
    fontSize: '24px',
    lineHeight: '30px',
    // marginLeft: '10px'
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  button: {
    margin: '5px',
  },

  dialog: {
    '&.MuiDialog-root': {
      minWidth: '600px',
      '&>.MuiDialog-container': {
        '&>.MuiDialog-paperWidthSm': {
          width: '600px',
        },
      },
    },
  },
}));
function Orders({ orders, onCancel = null, onSubmitComment = null }) {
  const classes = useStyles();
  const { name, status, date, lastPrice, paymentType, cartItems, id } = orders;
  console.log('orders', orders);
  //   dialog
  const [openCommentForm, setOpenCommentForm] = useState(false);
  const handleClickOpenCommentForm = () => {
    setOpenCommentForm(true);
  };

  const handleCloseCommentForm = () => {
    setOpenCommentForm(false);
  };

  // dialog coment
  const [openCommentView, setOpenCommentView] = useState(false);
  const handleClickOpenCommentView = () => {
    setOpenCommentView(true);
  };

  const handleCloseCommentView = () => {
    setOpenCommentView(false);
  };

  const handleCancelOrder = async () => {
    if (onCancel) {
      await onCancel(id);
    }
  };
  const dispatch = useDispatch();

  const handleBuyAgaint = () => {
    cartItems.forEach((item) => {
      const action = addToCart({
        idp: item.idp,
        product: item.product,
        quantity: item.quantity,
      });
      dispatch(action);
    });
  };

  const handleComment = async (data) => {
    if (onSubmitComment) {
      await onSubmitComment(data);
    }
  };

  return (
    <Box>
      <Container>
        <Grid item>
          <Box className={classes.header}>
            <Box className={classes.paymentType}>
              <Typography>Hình thức thanh toán: {paymentType}</Typography>
            </Box>
            <Box className={classes.status}>
              <Typography className={classes.statuss}>{status.statusString}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item className={classes.center}>
          <ListItems listItems={cartItems} />
        </Grid>
        <Grid item className={classes.footer}>
          <Box className={classes.date}>
            <Typography className={classes.dates}>Ngày đặt hàng:{date}</Typography>
          </Box>
          <Box className={classes.btn}>
            <Box className={classes.tongDonHang}>
              <Typography className={classes.tongtien}>Tổng số tiền: </Typography>
              <Typography className={classes.totalPrice}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                  lastPrice
                )}
              </Typography>
            </Box>
            <Box className={classes.btn1}>
              {status.statusString === 'Đã giao hàng' && (
                <>
                  {cartItems[0].product.commentOrders.length === 0 && (
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={handleClickOpenCommentForm}
                    >
                      Đánh giá
                    </Button>
                  )}
                  {cartItems[0].product.commentOrders.length > 0 && (
                    <Button
                      variant="contained"
                      className={classes.button}
                      color="secondary"
                      onClick={handleClickOpenCommentView}
                    >
                      Xem đánh giá
                    </Button>
                  )}
                </>
              )}
              {status.statusString === 'Đang tiếp nhận' && 'Đang vận chuyển' && (
                <>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={handleCancelOrder}
                  >
                    Hủy đơn hàng
                  </Button>
                </>
              )}
              {status.statusString === 'Hủy đơn hàng' && (
                <>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={handleBuyAgaint}
                  >
                    Mua lại
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Grid>
      </Container>
      {/* comment form */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={openCommentForm}
        onClose={handleCloseCommentForm}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <DialogContent>
          <CommentForm
            closeDialog={handleCloseCommentForm}
            onSubmitComment={handleComment}
            cartItems={cartItems}
            ido={id}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={openCommentView}
        onClose={handleCloseCommentView}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <DialogContent>
          <CommentView
            closeDialog={handleCloseCommentView}
            cartItems={cartItems}
            name={name}
            date={date}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Orders;
