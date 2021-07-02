import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {
    return (
        <Box>
            {/* <img src={product.images[0].image} style={{width:'25px', height: '25px' }}/>
            <Typography style={{color: 'black'}}>{product.name}</Typography> */}
        </Box>
    );
}

export default Product;