import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import ProductItem from './ProductItem';

CartItems.propTypes = {
    spi: PropTypes.array,
};
CartItems.defaultProps = {
    spi: [],
};
function CartItems({spi}) {
    
    return (
        <Box>
            <Grid container>
                {spi.map((item) => (
                    <Grid item key={item.id} xs={12}>
                        <ProductItem items={item}/>
                    </Grid>
                    
                ))}
            </Grid>
        </Box>
    );
}

export default CartItems;