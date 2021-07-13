import { Box, Button, Radio, RadioGroup, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../../utils';
import ProductDetailStyles from './ProductDetailStyles';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import classNames from 'classnames';
import SpecificItem from './SpecificItem';
import { keys } from '@material-ui/core/styles/createBreakpoints';


ProductInfo.propTypes = {
    product: PropTypes.object,
    comments: PropTypes.object,
}



function ProductInfo({product = {},comments = {} }) {
  
    const classes = ProductDetailStyles();
    const { name,ram,rom } = product;
   
    const [value, setValue] = useState();
    
        
    return (
        <Box>
            <Box className={classes.nameProduct}>
                <Typography variant="h4" className={classes.title}>
                    {name}
                </Typography>
                <Box >
                    <Rating name="half-rating-read" value={comments.tbcRate} precision={0.1} readOnly className={classes.rate}/>
                    <Typography variant="p" className={classes.comment}>{comments.tongCmt} đánh giá</Typography>
                </Box>
            </Box>
            <Box mt={1}>
                <Box component="span" className={classes.salePrice}>{formatPrice(product.salePrice)}</Box>
                <Typography variant="span" className={classes.price}>Giá niêm yết:</Typography>
                <Box component="span" className={classes.originalPrice}>{formatPrice(product.originalPrice)}</Box>
            </Box>
            
             <Box mt={2} >
                <span className={classes.romRam}>
                    <Typography className={classes.titleColor}>Ram:</Typography>
                    <Typography  className={classes.colors}>{ram?.ram}</Typography>
                </span>
                <span className={classes.romRam}>
                    <Typography className={classes.titleColor}>Rom:</Typography>
                    <Typography  className={classes.colors}>{rom?.ram}</Typography>
                </span>
                
            </Box>
            <Box className={classes.promotionWapper}>
                <Box component="b" className={classes.promotionHeader}>
                    <CardGiftcardIcon className={classes.iconGift}/>
                    KHUYẾN MÃI
                </Box>
                <Box mb={0.625} className={classes.titleKM}>
                    <Typography className={classes.KMH}>Khuyến mãi hãng:</Typography>
                    <Typography className={classes.TTKM}>[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1 triệu</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ProductInfo;