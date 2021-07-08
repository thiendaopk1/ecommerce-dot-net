import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

Items.propTypes = {
    items: PropTypes.object,
};
const useStyles = makeStyles(theme => ({
    root:{
        
    },

    product:{
        display: 'flex',
        flexFlow: 'row nowrap',
        float: 'left'
    },

    img: {
        height: '80px',
        width: '80px',

    },

    price:{
        display: 'flex',
        float: 'right'
    },

    prices: {
        color: '#ee4d2d'
    }
}))
function Items({items}) {
 
    const classes = useStyles();
    const {idp, product, quantity} = items;
  
    return (
        <Box className={classes.root}>
            <Box className={classes.product}>
                <img src={product.images[0].image} className={classes.img}/>
                <Box>
                    <Typography>{product.name}</Typography>
                    <Typography>x{quantity}</Typography>
                </Box>
            </Box>
            <Box className={classes.price}>
                <Typography className={classes.prices}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice*quantity)}</Typography>
            </Box>
        </Box>
    );
}

export default Items;