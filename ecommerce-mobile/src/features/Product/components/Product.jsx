import { Box, Button, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
// import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ProductStyles from './ProductStyles';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
// import { useHistory } from 'react-router';
// import {}
// import img from '../../../images/tagSale.png';


Product.propTypes = {
    product: PropTypes.object,

};

function Product({product}) {
    // console.log('commentalo', {comments});
    const comments = product.commentResponse;
    // console.log('commentalo', {product});
    const [value, setValue] = useState(2);
    const classes = ProductStyles();
    // useEffect(() => {
    //     setValue(comments.tbcRate)

    // },[comments])
    
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
                <Rating name="half-rating-read" value={value} precision={0.1} readOnly className={classes.rate} mr={2}/>
                {/* <Rating name="read-only" value={value} readOnly className={classes.rate}  /> */}
                <Typography variant="p" className={classes.comment} >1 đánh giá</Typography>
            </Box>
            <Box className={classes.button}>
                <Button variant="outlined" color="secondary" size="small">Mua ngay</Button>
            </Box>
           
        </Box>
    );
}

export default Product;