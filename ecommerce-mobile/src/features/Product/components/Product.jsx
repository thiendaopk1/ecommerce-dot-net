import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import React from 'react';
import ProductStyles from './ProductStyles';
// import img from '../../../images/tagSale.png';


Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const [value, setValue] = React.useState(2);
    const classes = ProductStyles();
    return (
        <Box padding={1} className={classes.root}>
            {/* nhớ sửa lại thành img */}
            <Box className={classes.image}>

                <Typography component="span" className={classes.percent}>-{product.promotionPercent}</Typography>
                <Skeleton variant="rect" width="100%" height={118} />
            </Box>

            <Typography component="span" className={classes.name} padding={1}>{product.name}</Typography>
            <Box>
                <Box component="span" className={classes.salePrice} >
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                <Box component="span" className={classes.originalPrice} ml={1}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice)}
                </Box>

            </Box>
            <Box component="span" ml={0}>
                <Rating name="read-only" value={value} readOnly className={classes.rate} mr={2} />
                <Typography component="span" className={classes.comment} >5 đánh giá</Typography>
            </Box>
        </Box>
    );
}

export default Product;