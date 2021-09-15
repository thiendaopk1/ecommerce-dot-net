import { Box, Button, Typography, Link } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import classNames from 'classnames';
// import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ProductStyles from './ProductStyles';
import './style.scss';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { addToCompare } from './compareSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import productApi from '../../../api/productApi';
import { useSnackbar } from 'notistack';
Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const { rating, sumRating } = product;
  const { enqueueSnackbar } = useSnackbar();
  const classes = ProductStyles();
  const history = useHistory();
  useLocation();
  useRouteMatch();
  // compare
  const compareList = useSelector((state) => {
    return state.compare.compareItems;
  });
  const [listInfo, setListInfo] = useState([]);
  console.log('list', listInfo);
  useEffect(() => {
    (async () => {
      const list = await productApi.getAllInfo(product.id);
      setListInfo(list);
      try {
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);

  const dispatch = useDispatch();
  const handleCompare = () => {
    if (listInfo.length > 0) {
      const action = addToCompare({
        idp: product.id,
        product,
        listInfo,
      });
      dispatch(action);
      enqueueSnackbar('Bạn đã thêm sản phẩm vào để so sánh', { variant: 'success' });
    }
  };

  const handleClickDetail = () => {
    history.push(`/products/${product.id}`);
  };

  const compareItem = compareList.find((item) => item.idp === product.id);
  console.log('compareITem', compareItem);

  return (
    <Box padding={1} className={classes.root}>
      <Box onClick={handleClickDetail} style={{ cursor: 'pointer' }}>
        <Box className={(classes.image, classNames('product-image'))}>
          <Typography component="span" className={classes.percent}>
            -{product.promotionPercents}%
          </Typography>
          <Box>
            <img src={product.images[0]?.image} alt={product.name} width="100%" height="100%" />
          </Box>
        </Box>
        <Box className={classes.name}>
          <Typography component="span" padding={1}>
            {product.name}
          </Typography>
        </Box>

        <Box>
          <Box component="span" className={classes.salePrice}>
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              product.salePrice
            )}
          </Box>
          <Box component="span" className={classes.originalPrice} ml={1}>
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              product.originalPrice
            )}
          </Box>
        </Box>
        <Box component="span" ml={0}>
          <Rating
            name="half-rating-read"
            value={sumRating / rating}
            precision={0.1}
            readOnly
            className={classes.rate}
            mr={2}
          />
          {/* <Rating name="read-only" value={value} readOnly className={classes.rate}  /> */}
          <Typography variant="p" className={classes.comment}>
            {rating} đánh giá
          </Typography>
        </Box>
      </Box>

      <Box className={classes.button}>
        {compareList.length >= 3 && (
          <>
            {compareItem?.idp === product.id && (
              <Button size="small" className={classes.buttonCompareDisabled}>
                <AddCircleOutlineIcon style={{ fontSize: '18px', color: '#b0b0b0' }} />
                Đã thêm vào so sánh
              </Button>
            )}
            {compareItem?.idp !== product.id && (
              <Button size="small" className={classes.buttonCompareDisabled}>
                <AddCircleOutlineIcon style={{ fontSize: '18px', color: '#b0b0b0' }} />
                So sánh
              </Button>
            )}
          </>
        )}
        {compareList.length < 3 && (
          <>
            {compareItem?.idp === product.id && (
              <Button size="small" className={classes.buttonCompare} onClick={handleCompare}>
                <AddCircleOutlineIcon style={{ fontSize: '18px', color: '#69a3f2' }} />
                Đã thêm vào so sánh
              </Button>
            )}
            {compareItem?.idp !== product.id && (
              <Button size="small" className={classes.buttonCompare} onClick={handleCompare}>
                <AddCircleOutlineIcon style={{ fontSize: '18px', color: '#69a3f2' }} />
                So sánh
              </Button>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}

export default Product;
