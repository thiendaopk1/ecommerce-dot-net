import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid} from '@material-ui/core';
import ProductItemCart from './ProductItemCart';

productItem.propTypes = {
    spi: PropTypes.array,
};
productItem.defaultProps = {
    spi: [],
};

function productItem({spi}) {
    
    return (
        <Box>
            <Grid container>
                {spi.map((item) => (
                    <Grid item key={item.idp} xs={12}>
                        <ProductItemCart items={item}/>
                    </Grid>
                    
                ))}
            </Grid>
        </Box>
    );
}

export default productItem;