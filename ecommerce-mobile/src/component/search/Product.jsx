import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

Product.propTypes = {
    product: PropTypes.object,
};
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        marginTop: '15px'
    },
    name: {
        color: 'black',
        marginLeft: '10px',
        width: '283px',
        fontWeight: '500'
    },
    price:{
        color: 'red',
        marginLeft: '10px',
        fontWeight: '500'
    }
}))
function Product({product}) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <img src={product.images[0].image} style={{width:'25px', height: '25px' }}/>
            <Typography className={classes.name}>{product.name}</Typography>
            <Typography className={classes.price}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}</Typography>
        </Box>
    );
}

export default Product;