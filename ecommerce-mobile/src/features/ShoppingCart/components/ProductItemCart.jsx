import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import QuantityFormCart from './QuantityFormCart';
import { setQuantity, removeFromCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

ProductItemCart.propTypes = {
  items: PropTypes.object,
};
const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '70px',
    height: '70px',
  },

  sp: {
    padding: '16px 0px',
    width: '39.27949%',
    display: 'block',
  },

  dg: {
    padding: '16px 0px',
    width: '15.88022%',
    display: 'block',
  },

  sl: {
    padding: '16px 0px',
    width: '15.4265%',
    display: 'block',
  },

  st: {
    padding: '16px 0px',
    width: '10.43557%',
    display: 'block',
  },

  tt: {
    padding: '16px 0px',
    width: '12.70417%',
    display: 'block',
  },

  items: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
}));
function ProductItemCart({ items }) {
  const classes = useStyle();
  const product = items.product;
  const quantityItem = items.quantity;
  const dispatch = useDispatch();

  const handleOnChange = ({ quantity }) => {
    const action = setQuantity({
      idp: product.id,
      quantity,
      product,
    });
    dispatch(action);
  };
  const handleClickRemove = ({ cartItems }) => {
    const action = removeFromCart({
      idp: product.id,
    });
    dispatch(action);
  };
  return (
    <Box padding={1} className={classes.root}>
      <Box className={classes.image}>
        <Link to={`products/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <img src={product.images[0].image} alt={product.name} width="100%" height="100%" />
        </Link>
      </Box>
      <Box className={classes.sp}>
        <Link to={`products/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <Typography>{product.name}</Typography>
          <Typography></Typography>
        </Link>
      </Box>

      <Box className={classes.dg}>
        <Typography>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
            product.salePrice
          )}
        </Typography>
      </Box>
      <Box className={classes.sl}>
        <QuantityFormCart quantityItem={quantityItem} idp={product.id} onChange={handleOnChange} />
      </Box>
      <Box className={classes.st}>
        <Typography>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
            product.salePrice * quantityItem
          )}
        </Typography>
      </Box>
      <Box className={classes.tt}>
        <Button onClick={handleClickRemove}>Xóa</Button>
      </Box>
    </Box>
  );
}

export default ProductItemCart;
