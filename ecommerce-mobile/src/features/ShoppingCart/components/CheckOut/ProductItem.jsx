import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

ProductItem.propTypes = {
    items: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
    header: {
        padding: '0 20px',
        color: 'rgba(0,0,0,.8)',
        background: '#fff',
        textTransform: 'capitalize',
        height: '3.4375rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        overflow: 'hidden',
    },

    sp: {

        width: '56.25771%',
        display: 'block',
        fontWeight: '500',
       
    },

    dg: {
        padding: '16px 0px',
        width: '15.88022%',
        display: 'block',
        color:'#bbb',
        textAlign: 'center'
    },

    sl: {
        padding: '16px 0px',
        width: '15.4265%',
        display: 'block',
        color:'#bbb',
        textAlign: 'center'
    },

    tt: {
        padding: '16px 0px',
        width: '12.43557%',
        display: 'block',
        color:'#bbb',
        textAlign: 'center'
    },

    name:{
        fontSize: '14px',
        fontWeight: '600'
    },

    center: {
        marginTop: '10px',
        display: 'flex',
        flexFlow: 'row nowrap'
    },

    sanPham:{
        display:'flex',
        flexFlow: 'row nowrap',
        width: '55.25771%',
    },

    image: {
        width: '70px',
        height: '70px'
    },

    donGia:{
        width: '15.88022%',
        textAlign: 'center'
    },

    soLuong:{
        width: '12.4265%',
        textAlign: 'center'
    },

    thanhTien:{
        width: '15.43557%',
        textAlign: 'center'
    },

    
}))
function ProductItem({items}) {
    const product = items.product;
    const quantity = items.quantity;
    console.log('product', {product});
    const classes = useStyles();
 
    return (
        <Box>   
            <Box className={classes.center}> 
                <Box className={classes.sanPham}>
                    <Box className={classes.image}>
                        <img src={product.images[0].image} alt={product.name} width="100%" height="100%" />
                    </Box>               
                    <Box className={classes.sp}>
                        <Typography className={classes.name}>{product.name}</Typography>
                    </Box>
                </Box>
                <Box className={classes.donGia}>
                    <Typography>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}</Typography>
                </Box>
                <Box className={classes.soLuong}>
                    <Typography>{quantity}</Typography>
                </Box>
                <Box className={classes.thanhTien}>
                    <Typography>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice*quantity)}</Typography>
                </Box>
            </Box>
            
        </Box>
    );
}

export default ProductItem;