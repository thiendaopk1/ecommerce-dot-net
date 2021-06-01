import { Box, Button, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
// import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ProductStyles from './ProductStyles';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
// import { useHistory } from 'react-router';
// import {}
// import img from '../../../images/tagSale.png';


Product.propTypes = {
    product: PropTypes.object,
    comments: PropTypes.object,
};

function Product({product, comments = {}}) {
    
    // const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
//    const  rate = product.commentResponse.tbcRate;
    const [value, setValue] = useState(2);
    const classes = ProductStyles();
    
    return (
        <Box padding={1} className={classes.root}>
            {/* nhớ sửa lại thành img */}
            <Box className={classes.image}>
                
                <Typography component="span" className={classes.percent}>-{product.promotionPercents}%</Typography>
                <img src={product.images[0].image} alt={product.name} width="100%" height="100%" />
            </Box>
            <Box className={classes.name}>
                <Typography component="span"  padding={1}>{product.name}</Typography>
            </Box>
           
            <Box>
                <Box component="span" className={classes.salePrice} >
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                <Box component="span" className={classes.originalPrice} ml={1}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice)}
                </Box>

            </Box>
            <Box component="span" ml={0}>
                <Rating name="read-only" value={comments.tbcRate} readOnly className={classes.rate} mr={2} />
                <Typography component="span" className={classes.comment} >{comments.tongCmt}</Typography>
            </Box>
            <Box className={classes.button}>
                <Button variant="outlined" color="secondary" size="small">Mua ngay</Button>
            </Box>
           
        </Box>
    );
}

export default Product;