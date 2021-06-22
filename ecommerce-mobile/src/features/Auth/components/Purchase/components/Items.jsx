import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

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
    const {priceAll, pricePerOne, productImg, productName, quatity} = items;
    
    return (
        <Box className={classes.root}>
            <Box className={classes.product}>
                <img src={productImg} className={classes.img}/>
                <Box>
                    <Typography>{productName}</Typography>
                    <Typography>x{quatity}</Typography>
                </Box>
            </Box>
            <Box className={classes.price}>
                <Typography className={classes.prices}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceAll)}</Typography>
            </Box>
        </Box>
    );
}

export default Items;