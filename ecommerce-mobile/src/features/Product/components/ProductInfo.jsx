import { Box, Button, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from '../../../utils';
import ProductDetailStyles from './ProductDetailStyles';


ProductInfo.propTypes = {
    product: PropTypes.object,
    
};


function ProductInfo({product = {}}) {
    const classes = ProductDetailStyles();
    const { name, salePrice, originalPrice, promotionPercent } = product;
    return (
        <Box>
            <Box className={classes.nameProduct}>
                <Typography variant="h4" className={classes.title}>
                    {name}
                </Typography>
                <Box component="span" >
                    <Rating name="read-only" value={3}  readOnly className={classes.rate}/>
                    <Typography variant="span" className={classes.comment}>5 đánh giá</Typography>
                </Box>
            </Box>
            <Box mt={1}>
                <Box component="span" className={classes.salePrice}>{formatPrice(product.salePrice)}</Box>
                <Typography variant="span" className={classes.price}>Giá niêm yết:</Typography>
                <Box component="p" className={classes.originalPrice}>{formatPrice(product.originalPrice)}</Box>
            </Box>
            <Box mt={2}>
                <Box component="a" className={classes.box1}>
                    <Typography component="span" className={classes.ram}>128GB</Typography>
                    <Box component="span" className={classes.ramPrice}>{formatPrice(product.salePrice)}</Box>
                </Box>
            </Box>
            <Box mt={2}>
            <Typography component="span" className={classes.titleColor}>Màu sắc:</Typography>
                <Box component="a" className={classes.box2}>
                    <Typography component="span" className={classes.colorProduct}>Màu đỏ</Typography>
                    <Box component="span" className={classes.colorPrice}>{formatPrice(product.salePrice)}</Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ProductInfo;