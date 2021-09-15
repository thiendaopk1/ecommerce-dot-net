import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';
import AddToCartForm from './AddToCartForm';
import { Box } from '@material-ui/core';
import { addToCart } from '../../ShoppingCart/cartSlice';
import { useDispatch } from 'react-redux';
import cartApi from '../../../api/cartApi';
import { useSnackbar } from 'notistack';

ProductContentCenter.propTypes = {
  product: PropTypes.object,
};

function ProductContentCenter({ product = {} }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const comments = product.commentResponse;
  const { amount } = product;
  const handleAddToCartSubmit = ({ quantity }) => {
    if (quantity > amount) {
      enqueueSnackbar(`Số lượng sản phẩm còn lại chỉ còn ${amount} sản phẩm`, { variant: 'error' });
    } else if (quantity < amount) {
      const action = addToCart({
        idp: product.id,
        product,
        quantity,
      });
      dispatch(action);
      enqueueSnackbar(`Bạn đã thêm ${quantity} sản phẩm vào giỏ hàng`, { variant: 'success' });
    }
  };

  return (
    <Box>
      <ProductInfo comments={comments} product={product} />

      <AddToCartForm amount={amount} onSubmit={handleAddToCartSubmit} />
    </Box>
  );
}

export default ProductContentCenter;
