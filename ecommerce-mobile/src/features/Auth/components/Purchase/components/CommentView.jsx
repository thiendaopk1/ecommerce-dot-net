import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { DataUsageSharp } from '@material-ui/icons';
CommentView.propTypes = {
  cartItems: PropTypes.array,
  closeDialog: PropTypes.func,
  name: PropTypes.string,
  date: PropTypes.string,
};
const useStyles = makeStyles((theme) => ({
  main: {
    flex: '1',
    overflowY: 'auto',
    paddingRight: '50px',
    marginRight: '-50px',
    paddingLeft: '50px',
    marginLeft: '-50px',
    position: 'relative',
  },

  commentList: {
    marginBottom: '84px',
  },

  commentItem: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid #ddd',
    padding: '10px 10px',
    '&:last-child': {
      border: 'none',
    },
  },

  infoProduct: {
    display: 'flex',
    alignItems: 'center',
  },

  productName: {
    marginLeft: '20px',
  },

  image: {
    with: '80px',
    height: '80px',
  },

  footer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'flex-end',
    right: '0',
    height: '84px',
    textTransform: ' uppercase',
    background: 'linear-gradient(rgba(255,255,255,0.9), #fff)',
    alignItems: 'center',
    padding: '22px 30px',
    boxSizing: 'border-box',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
  },

  comment: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  },

  rate: {
    display: 'flex',
    alignItems: 'center',
  },

  user: {
    display: 'flex',
  },
}));
function CommentView({ cartItems = [], closeDialog = null, name, date }) {
  const classes = useStyles();
  const handleClose = () => {
    if (closeDialog) {
      closeDialog();
    }
  };
  return (
    <div>
      <Box className={classes.header}>
        <Typography variant="h4">Đánh giá sản phẩm</Typography>
      </Box>
      <Box className={classes.main}>
        <Box className={classes.commentList}>
          {cartItems.map((cartItem) => (
            <Box className={classes.commentItem}>
              <Box className={classes.infoProduct}>
                <Box className={classes.image}>
                  <img
                    src={cartItem.product.images[0].image}
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                  />
                </Box>
                <Typography className={classes.productName}>{cartItem.product.name}</Typography>
              </Box>
              <Box className={classes.comment}>
                <Box className={classes.user}>
                  <Typography>{name} ||</Typography>
                  <Typography>{date}</Typography>
                </Box>
                <Box className={classes.rate}>
                  <Rating value={cartItem.product.commentOrders[0].rate} readOnly />
                  <Typography>{cartItem.product.commentOrders[0].content}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.footer}>
        <Button onClick={handleClose}>OK</Button>
      </Box>
    </div>
  );
}

export default CommentView;
