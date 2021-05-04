import { Box, Button, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from '../../../utils';
import ProductDetailStyles from './ProductDetailStyles';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import classNames from 'classnames';


ProductInfo.propTypes = {
    product: PropTypes.object,
}



function ProductInfo({product = {}}) {
    console.log({product})
    const classes = ProductDetailStyles();
    const { name, specifics } = product;
    // console.log(specifics)

    const handleClick = (e) => {
        e.target.closest('li').classList.toggle('selected');
        
    }
  
    return (
        <Box>
            <Box className={classes.nameProduct}>
                <Typography variant="h4" className={classes.title}>
                    {name}
                </Typography>
                <Box component="span" >
                    <Rating name="read-only" value={3}  readOnly className={classes.rate}/>
                    <Typography variant="p" className={classes.comment}>5 đánh giá</Typography>
                </Box>
            </Box>
            <Box mt={1}>
                <Box component="span" className={classes.salePrice}>{formatPrice(product.salePrice)}</Box>
                <Typography variant="span" className={classes.price}>Giá niêm yết:</Typography>
                <Box component="span" className={classes.originalPrice}>{formatPrice(product.originalPrice)}</Box>
            </Box>
            <Box mt={2} >
                <Typography component="span" className={classes.titleColor}>Màu sắc:</Typography>
                <Box component="ul" className={classes.colors}>
                    {specifics &&  specifics.map((specific)  => (
                        <Box key={specific.id} component="li" className={classes.box2} onClick={handleClick} >
                            <Typography component="span" className={classes.colorProduct}>{specific.color}</Typography>
                            <Typography component="span" className={classes.ram}>{specific.ram.ram}-{specific.rom.rom}</Typography>
                            <Box component="span" className={classes.colorPrice}>{formatPrice(product.salePrice)}</Box>
                        </Box>
                    ))}
                </Box>
                
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